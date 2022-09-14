import * as React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  IncidentReportRepoContext,
  PatientContext,
  PatientRepoContext,
  ReportIdContext,
  AccountContext,
  AccountRepoContext,
  PreliminaryReportRepoContext,
} from '../components/GlobalContextProvider';
import { useContext, useState, useRef, useEffect } from 'react';
import { exportMapAsPdf } from '../model/exportAsPdf';
import uiStyle from '../components/uiStyle';


function AllPrelimReports({ navigation }){
  
  const preliminaryReportRepoContext = useContext(PreliminaryReportRepoContext);
  const [, setPatient] = useContext(PatientContext);
  const [account] = useContext(AccountContext);
  //const [reportId] = useContext(ReportIdContext);
  const mounted = useRef(false);
  const [reportResults, setReportResults] = useState([]);
 

  useEffect(() => {
    mounted.current = true; // Component is mounted
    return () => {
      // Component is unmounted
      mounted.current = false;
    };
  }, []);

  const createPDF = async (results) => {
    exportMapAsPdf("Basic Report", results);
  }

  let usersButtons = [];
  var dict = {0:'FAIL', 1:'PASS'};
  //console.log(account.account_id);
//   const reports = incidentRepoContext.getPrelimReports(account.account_id);
    let reports = [];
  preliminaryReportRepoContext.getListofPatientReports(account.account_id).then((values) => {
    //console.log(values);
    if(reportResults != null){
      setReportResults(values);
    }
    
    // console.log(reports.length);

    });
    //console.log(reportResults);
    if (reportResults.length > 0) {
      let j = 1;
      let z=0;
      for (let i = 0; i < reportResults.length; i++) {
          //console.log(reportResults[i]);
        const description = '\n Memory Test 1: '+dict[reportResults[i].memory_test1_result] + ' \n Memory Test 2: ' + dict[reportResults[i].memory_test2_result] +
        ' \n Reaction Test: '+ dict[reportResults[i].reaction_test_result] + ' \n Balance Test 1: '+ dict[reportResults[i].balance_test1_result] +' \n Balance Test 2: '+
        dict[reportResults[i].balance_test2_result] +' \n';
        //console.log(description);
        usersButtons.push(
          <Text key={z} style={uiStyle.text}>Report {reportResults[i].report_id} {description}</Text>,
        );
        usersButtons.push(
          <TouchableOpacity
        key={j} style={styles.bottomButton}
        onPress={()=> {createPDF(description)}}
      >
        <Text style={uiStyle.buttonLabel}>Generate PDF report</Text>
      </TouchableOpacity>
        
        );
        j+=2;
        z+=2;
        // if(reportResults.length == 1){
        //   reportResults.pop();
        // }
        // reportResults.slice(i+1, reportResults.length);
        //console.log(usersButtons[i]);
      }
    }
      else{
        
        usersButtons.push(
          <Text key={1} style={uiStyle.buttonLabel}>No such reports.</Text>
        );
      }
      
      
//     console.log('done');
// console.log(usersButtons);
return(
    <SafeAreaView style={uiStyle.container}>
  <Text style={styles.text}>
    All Preliminary Reports for {account.first_name}
  </Text>
  <ScrollView>{usersButtons}</ScrollView>
  
  <TouchableOpacity
    style={styles.bottomButton}
    onPress={() => navigation.navigate('Home')}
  >
    <Text style={uiStyle.buttonLabel}>Return to Home</Text>
  </TouchableOpacity>
</SafeAreaView>
);

    
}

const styles = StyleSheet.create({
    inputAreaContainer: {
      flex: 1,
      alignItems: 'center',
    },
    input: {
      height: 40,
      width: 300,
      margin: 12,
      borderRadius: 50,
      padding: 10,
      backgroundColor: '#D3D3D3',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      letterSpacing: 0.25,
      marginHorizontal: 50,
      marginVertical: 10,
    },
    bottomButton: {
      marginLeft: 10,
      marginRight: 10,
      width: 300,
      height: 50,
      padding: 10,
      marginVertical: 10,
      borderRadius: 100,
      backgroundColor: '#ff0000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default AllPrelimReports;