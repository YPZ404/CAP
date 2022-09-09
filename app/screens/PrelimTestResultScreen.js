import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';

import { useEffect, useContext, useState, useRef } from 'react';
import {
  IncidentReportRepoContext,
  ReportIdContext,
  PrelimReportIdContext,
  PreliminaryReportRepoContext,
  AccountContext,
  AccountRepoContext
} from '../components/GlobalContextProvider';
import uiStyle from '../components/uiStyle';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

const reactionThreshold = 500;
const parseReactionTest = (rt) => {
  const reactionTestResponses = [];
  if ((rt.time_attempt_1 < reactionThreshold || rt.time_attempt_2 < reactionThreshold || rt.time_attempt_3 < reactionThreshold)) {
    reactionTestResponses.push('Reaction Test Result: Passed');
  } else {
    reactionTestResponses.push('Reaction Test Result: Failed');
  }
  return reactionTestResponses;
};

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 * @param {boolean} route.params.secondMemoryTestResponses response of the second memory test. Inserting from the
 * previous screen tends to be too slow.
 */
function PrelimTestResultScreen({ route, navigation }) {
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const [reportId] = useContext(ReportIdContext);
  const [mtAndBtResults, setMTBTResults] = useState([]);
  const [reportResults, setReportResults] = useState([]);
  const [reactionTest, setReactionTest] = useState(null);
  const preliminaryReportRepoContext = useContext(PreliminaryReportRepoContext);
  const [prelimReportId] = useContext(PrelimReportIdContext);
  const [account] = useContext(AccountContext);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true; // Component is mounted
    return () => {
      // Component is unmounted
      mounted.current = false;
    };
  }, []);
  useEffect(() => {
    preliminaryReportRepoContext
        .getCurrentReportInformation(prelimReportId)
        .then((data) => setReportResults(data)); 
    
  }, [preliminaryReportRepoContext, prelimReportId]);

  
  let allTestResults = [];
  let pdfResults = [];
  var dict = {0:'FAIL', 1:'PASS'};
  Object.entries(reportResults).forEach(([key, value]) => {
    switch(key){
      case 'memory_test1_result':
        allTestResults.push(
          <Text key={0} style={uiStyle.text}>
            {'Memory Test 1 Result: ' + dict[value]}
          </Text>,
          
        );
        pdfResults.push({test_name: 'Memory Test 1 Result: ', grade: dict[value]});
        break
      case 'memory_test2_result':
        allTestResults.push(
          <Text key={1} style={uiStyle.text}>
            {'Memory Test 2 Result: ' + dict[value]}
          </Text>,
        );
        pdfResults.push({test_name: 'Memory Test 2 Result: ', grade: dict[value]});

        break
      case 'reaction_test_result':
        allTestResults.push(
          <Text key={2} style={uiStyle.text}>
            {'Reaction Test Result: ' + dict[value]}
          </Text>,
        );
        pdfResults.push({test_name: 'Reaction Test Result: ', grade: dict[value]});

        break
      case 'balance_test1_result':
        allTestResults.push(
          <Text key={3} style={uiStyle.text}>
            {'Balance Test 1 Result: ' + dict[value]}
          </Text>,
        );
        pdfResults.push({test_name: 'Balance Test 1 Result: ', grade: dict[value]});

        break
      case 'balance_test2_result':
        allTestResults.push(
          <Text key={4} style={uiStyle.text}>
            {'Balance Test 2 Result: ' + dict[value]}
          </Text>,
        );
        pdfResults.push({test_name: 'Balance Test 2 Result: ', grade: dict[value]});

      
      
     

    }

    console.log(key , value); // key ,value
    console.log(pdfResults);
    
  });

  const htmlPDF = `
    <html>
      <body>
        <h1> Test </h1>
      </body>
    </html>
  `;
  const createPDF = async () => {
    const file = await printToFileAsync({
      html: htmlPDF,
      base64: false
    });

    await shareAsync(file.uri);
    // console.log(file.filePath);
    alert(file.uri);

  }

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
          console.log(prelimReportId);
          incidentRepoContext.updateReport(account.account_id, prelimReportId);
          navigation.navigate('Home')}
        ,
      },
    ],
  );
  // if (reportResults.length > 0) {
  //   let i = 0;
  //   for (; i < mtAndBtResults.length; i++) {
  //     allTestResults.push(
  //       <Text key={i} style={uiStyle.text}>
  //         {reportResults[i]}
  //       </Text>,
  //     );
  //   }
    
  // }

  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.titleText}>Preliminary Tests Results</Text>
      <ScrollView>{allTestResults}</ScrollView>
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
        onPress={createPDF}
      >
        <Text style={uiStyle.buttonLabel}>Generate PDF</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={uiStyle.buttonLabel}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default PrelimTestResultScreen;
