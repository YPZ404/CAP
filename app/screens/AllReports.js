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


function AllReports({ navigation }){
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

//   useEffect(() => {
//     // Everytime there is a new patientRepoContext we
//     // get patients from it.
//     if (accountRepoContext !== null) {
//         accountRepoContext.getAllAccounts().then((pts) => {
//         if (mounted.current) {
//           setAccounts(pts);
//         }
//       });
//     } else {
//       console.log('null patientRepo');
//     }
//   }, [accountRepoContext]);


    const createAlert = () =>
    Alert.alert(
      'Alert',
      'Need to Login to see reports',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ],
    );
    return(
        <SafeAreaView style={uiStyle.container}>
      <Text style={styles.text}>
        Which reports would you like to access?
      </Text>
      <SafeAreaView style={styles.inputAreaContainer}>
        
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => {
              if(account.account_id == null && account.first_name== 'John'){
                  createAlert();
              }
              else{
                navigation.navigate('Prelim Report'); 
              }
                
          }}
        >
          <Text style={uiStyle.buttonLabel}>Preliminary Test Reports</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => {
            if(account.account_id == null && account.first_name== 'John'){
                createAlert();
            }
            else{
                navigation.navigate('Incident Reports')
            }
        }}
        >
          <Text style={uiStyle.buttonLabel}>Incident Reports</Text>
        </TouchableOpacity> */}
      </SafeAreaView>
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


export default AllReports;