import * as React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  Alert,
  Dimensions,
  View,
  ImageBackground,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'; 
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
console.log(usersButtons);
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
  Containerr: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
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
    color: '#003A67',
    fontSize: Dimensions.get('window').width/25,
    fontWeight: '800',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bottomButton: {
    width: Dimensions.get('window').width/1.5,
    height: Dimensions.get('window').width/10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
    marginBottom: (Dimensions.get('window').height)/30,
    marginTop: (Dimensions.get('window').height)/1.5,
  },
  titlecontainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/28,
    alignItems: 'center',
    backgroundColor: '#9AD3FF',
    marginBottom: (Dimensions.get('window').height)/300,
    marginTop: (Dimensions.get('window').height)/20,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});


export default AllPrelimReports;




















