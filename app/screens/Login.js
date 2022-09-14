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
  PrelimReportIdContext,
  PreliminaryReportRepoContext
  
} from '../components/GlobalContextProvider';
import { useContext, useState, useRef, useEffect } from 'react';
import uiStyle from '../components/uiStyle';

// function checkPatient(firstNameValue, lastNameValue){
//     const [reportId] = useContext(ReportIdContext);
//   const patientRepoContext = useContext(PatientRepoContext);
//   const incidentRepoContext = useContext(IncidentReportRepoContext);
//   const [, setPatient] = useContext(PatientContext);
//     if (patientRepoContext !== null) {
//         var patients = patientRepoContext.getAllPatients();
//         for(var patient in patients){
//             if(patient.firstName == firstNameValue && patient.lastName == lastNameValue){
//                 setPatient(patient);
//                 return true;
//             }
//         }
//         return false;
//     }
// }
function LoginScreen({ navigation }){
const [accounts, setAccounts] = useState([]);
  const patientRepoContext = useContext(PatientRepoContext);
  const accountRepoContext = useContext(AccountRepoContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const [, setPatient] = useContext(PatientContext);
  const [, setAccount] = useContext(AccountContext);
  const preliminaryReportRepoContext = useContext(PreliminaryReportRepoContext);
  const [prelimReportId] = useContext(PrelimReportIdContext);
  const [reportId] = useContext(ReportIdContext);
  const mounted = useRef(false);
  const [firstNameOfUser, onChangeFirstName] = useState('');
  const [lastNameOfUser, onChangeLastName] = useState('');
  const [passwordValue, onChangePassword] = useState('');

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

  const checkAccount = (firstNameValue, lastNameValue, passwordValue)=> {
    if (accountRepoContext !== null) {
        
        for(let i = 0; i< accounts.length; i++){
            if(accounts[i].first_name == firstNameValue && accounts[i].last_name == lastNameValue && accounts[i].password == passwordValue){
                setAccount(accounts[i]);
                if(reportId != null){
                    incidentRepoContext.updateReport(accounts[i].account_id, reportId);
                }
                if(prelimReportId != 0){
                    incidentRepoContext.updatePrelimReport(accounts[i].account_id, prelimReportId);
                }
                return true;
            }
        }
        return false;
    }
}
    const createAlert = () =>
    Alert.alert(
      'Alert',
      'Incorrect Login',
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
        Enter your first name and last name to login
      </Text>
      <SafeAreaView style={styles.inputAreaContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFirstName}
          value={firstNameOfUser}
          placeholder="First Name"
          returnKeyType="done"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeLastName}
          value={lastNameOfUser}
          placeholder="Last Name"
          returnKeyType="done"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={passwordValue}
          placeholder="Password"
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => {
            if(checkAccount(
              firstNameOfUser,
              lastNameOfUser,
              passwordValue
            )){
                navigation.navigate('Continue Tests', {screen: 'Home Page'});
            }else{
                createAlert();
            };
            
          }}
        >
          <Text style={uiStyle.buttonLabel}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('Continue Tests', {screen: 'Create Profile'})}
        >
          <Text style={uiStyle.buttonLabel}>Create Login</Text>
        </TouchableOpacity>
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


export default LoginScreen;