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
  AccountRepoContext
} from '../components/GlobalContextProvider';
import { useContext, useState, useRef, useEffect } from 'react';
import uiStyle from '../components/uiStyle';


function AllIncidentReports({ navigation }){
  const patientRepoContext = useContext(PatientRepoContext);
  const accountRepoContext = useContext(AccountRepoContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const [, setPatient] = useContext(PatientContext);
  const [account] = useContext(AccountContext);
  const [reportId] = useContext(ReportIdContext);
  const mounted = useRef(false);
 

  useEffect(() => {
    mounted.current = true; // Component is mounted
    return () => {
      // Component is unmounted
      mounted.current = false;
    };
  }, []);

  let usersButtons = [];
  const reports = incidentRepoContext.getReports(account.account_id);
  console.log('yes');
  console.log(reports);
  if (reports > 0) {
    console.log('yes');
    for (let i = 0; i < reports.length; i++) {
      const correctReport = incidentRepoContext.getMultiResponses(reports[i]);
      const singleReport = incidentRepoContext.getSingleResponses(reports[i]);
      if(correctReport != null){
        const description = correctReport.description;
        usersButtons.push(
          <Text key={i} style={uiStyle.buttonLabel}>Report {reports[i].report_id}{description}</Text>
        );
      }
      if(singleReport != null){
        const description = singleReport.description;
        usersButtons.push(
          <Text key={i} style={uiStyle.buttonLabel}>Report {reports[i].report_id}{description}</Text>
        );
      }
    }
    }
    else{
        <Text key={0} style={uiStyle.buttonLabel}>No such reports.</Text>
    }


    return(
        <SafeAreaView style={uiStyle.container}>
      <Text style={styles.text}>
        All Reports for {account.first_name}
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


export default AllIncidentReports;