import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import { useContext, useEffect, useRef, useState } from 'react';
import {
  IncidentReportRepoContext,
  PatientContext,
  PatientRepoContext,
  ReportIdContext,
  AccountContext,
  AccountRepoContext
} from '../components/GlobalContextProvider';
import uiStyle from '../components/uiStyle';

const parseSingleResponses = (srs) => {
  let responsesArray = [];
  if (srs !== null) {
    srs.forEach((element) => {
      if (
        element.description === 'Mechanism of injury response' &&
        element.response === 'YES'
      ) {
        responsesArray.push('Yes');
      }
    });
  }
  return responsesArray;
};
/**
 * The screen will show the result after user has completed "IncidentReport"
 * The screen will either be:
 * patient needs to go to GP ASAP,
 * or
 * do further test to assess concussion or go to home and create profile
 *
 * @param {boolean} route.params.hasSymptoms if the individual has any PCSS symptoms
 */
function SecondCheckResults({ route, navigation }) {
  // Context variables
  const [reportId] = useContext(ReportIdContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const mounted = useRef(false);
  const [symptoms, setSymptoms] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const accountRepoContext = useContext(AccountRepoContext);
  const [account] = useContext(AccountContext);

  useEffect(() => {
    mounted.current = true; // Component is mounted
    return () => {
      // Component is unmounted
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (route.params.hasSymptoms) {
      setSymptoms((prevSymptoms) => ++prevSymptoms);
    }
  }, [route.params.hasSymptoms]);

  // Local state
  let [responses, setResponses] = useState([]);
  let screen;

  useEffect(() => {
    // Get single responses
    incidentRepoContext.getSingleResponses(reportId).then((srs) => {
      if (mounted.current) {
        setResponses(parseSingleResponses(srs));
      }
    });
  }, [incidentRepoContext, reportId]);

  useEffect(() => {
    responses.forEach((element) => {
      if (element === 'Yes') {
        setSymptoms((prevSymptoms) => ++prevSymptoms);
      }
    });
  }, [responses]);
  const createAlert = () =>
  Alert.alert(
    'Alert',
    'Save To Profile',
    [
      {
        text: 'Save to new profile',
        onPress: () => navigation.navigate('Login'),
      },
      {
        text: 'Save to logged profile',
        onPress: () => {
          console.log(account.account_id);
          
          incidentRepoContext.updateReport(account.account_id, reportId);
          navigation.navigate('Home')}
        ,
      },
    ],
  );

  if (symptoms > 0) {

    screen = (
      <ScrollView styles={styles.scroll}>
        <View style={uiStyle.container}>
          <Text style={styles.text}>
            The affected individual is displaying some symptoms of concussion.
            {'\n'} {'\n'}
            We strongly recommend you complete our preliminary tests.
            {'\n'} {'\n'}
            If you are concerned, immediately contact a GP.
          </Text>
          <View style={styles.textContainer}>
          <TouchableOpacity onPress={()=>{
        if(account.account_id != null && account.first_name != 'John'){
          
          createAlert();
        }
        else{
          navigation.navigate('Login');
        }
      }} style={styles.bottomButton}>
                <Text style={styles.buttonLabel}>Save Report</Text>
              </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => navigation.navigate('Further Tests')}
            >
              <Text style={styles.buttonLabel}>Complete Preliminary Tests</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  } else {
    screen = (
      <ScrollView styles={styles.scroll}>
        <View style={uiStyle.container}>
          <Text style={uiStyle.stackedText}>
            There is a low probability of a concussion injury.
            {'\n'} {'\n'}
            However, we strongly recommend you immediately remove yourself from
            play and complete the preliminary tests down below.
            {'\n'} {'\n'}
            You should rest for the next 24 hours. If symptoms should develop,
            see a GP immediately.
          </Text>
          <View style={styles.textContainer}>
          <TouchableOpacity onPress={()=>{
        if(account.account_id != null && account.first_name != 'John'){
          
          createAlert();
        }
        else{
          navigation.navigate('Login');
        }
      }} style={styles.bottomButton}>
                <Text style={styles.buttonLabel}>Save Report</Text>
              </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={() => navigation.navigate('Further Tests')}
            >
              <Text style={styles.buttonLabel}>Complete Preliminary Tests</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.titleText}>Result</Text>
      <ScrollView>{screen}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, alignItems: 'center' },
  bottomButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#ff0000',
    marginHorizontal: 50,
    marginVertical: 10,
    width: 300,
    height: 50,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
    letterSpacing: 0.25,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default SecondCheckResults;
