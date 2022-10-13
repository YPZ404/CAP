import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {
  IncidentReportRepoContext,
  PatientContext,
  PatientRepoContext,
  ReportIdContext,
  AccountContext,
  AccountRepoContext
} from '../components/GlobalContextProvider';
import * as Linking from "expo-linking"
import { useContext, useState, useRef, useEffect } from 'react';

import uiStyle from '../components/uiStyle';
import { Link } from 'native-base';
/**
 * Shows result for check if patient have any selected non-well symptoms.
 */
function BadCheckScreen({ navigation }) {
  const [accounts, setAccounts] = useState([]);
  const accountRepoContext = useContext(AccountRepoContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const mounted = useRef(false);
  const [reportId] = useContext(ReportIdContext);
  const [account] = useContext(AccountContext);

  useEffect(() => {
    mounted.current = true; // Component is mounted
    return () => {
      // Component is unmounted
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    // Everytime there is a new patientRepoContext we
    // get patients from it.
    if (accountRepoContext !== null) {
        accountRepoContext.getAllAccounts().then((pts) => {
        if (mounted.current) {
          setAccounts(pts);
        }
      });
    } else {
      console.log('null patientRepo');
    }
  }, [accountRepoContext]);


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
          
          incidentRepoContext.updateReport(account.account_id, reportId);
          navigation.navigate('Home')}
        ,
      },
    ],
  );

  return (

    <SafeAreaView style={uiStyle.container}>
      
      <Text style={uiStyle.text}>
        The injured individual is showing severe symptoms and should seek medical attention immediately.
      </Text>    
      
      <TouchableOpacity onPress={()=>{
        console.log("Call 000 button was pressed (BadCheckScreen.js)");
        Linking.openURL("tel:0123456789");
      }} style={styles.startCheckButton}>
            <View style={uiStyle.startCheckButton}>
              <Text style={uiStyle.startCheckText}>Call 000</Text>
             </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{

        navigation.navigate('Home Page')
      }} style={styles.bottomButton}>
                <Text style={styles.buttonLabel}>Return Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  callSymbol: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
    borderRadius: 100,
    width: 200,
    height: 200,
    position: 'relative',
    marginBottom: 150,
  },
  text: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: 0.3,
    marginHorizontal: 50,
    marginVertical: 50,
    fontWeight: 'bold',
    position: 'relative',
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomButton: {
    marginLeft: 10,
    width: 300,
    height: 50,
    padding: 10,
    marginVertical: 10,
    borderRadius: 100,
    backgroundColor: '#FB582F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BadCheckScreen;
