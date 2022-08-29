import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Alert,
  Dimensions,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import uiStyle from '../components/uiStyle';
import { useContext } from 'react';
import {
  IncidentReportRepoContext,
  PatientRepoContext,
  ReportIdContext,
} from '../components/GlobalContextProvider';

const RootStack = createNativeStackNavigator();

/**
 * Starting screen that handles navigation to main app flows.
 *
 * @param navigation used to move to the other screens
 */
function HomeScreen({ navigation }) {
  const createAlert = () =>
    Alert.alert(
      'Alert',
      'We strongly recommend you have someone else do the concussion check for you',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home Page', { screen: 'Red flags checklist' } ),
        },
      ],
    );

  return (
    
    <SafeAreaView style={styles.screen}>
      <Text style={styles.titleText}>Concussion Check</Text>
      
        <TouchableOpacity onPress={createAlert} style={styles.startCheckButton}>
          <Text style={styles.buttonLabel}>Begin Check</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Choose Profile')}
          style={styles.viewHistoryButton}
        >
          <Text style={styles.buttonLabel}>View History</Text>
        </TouchableOpacity>
    
      </SafeAreaView>
    
  );
}

// https://reactnative.dev/docs/colors
const title = '#fff';
const text = '#fff';
const background = '#349BEB';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: background,
  },
  startCheckButton: {
    width: Dimensions.get('window').width/1.3,
    height: Dimensions.get('window').width/7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
    margin: 10,
  },
  startCheckText: {
    color: text,
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleText: {
    color: title,
    fontSize: 30,
    marginTop: 60,
    fontWeight: 'bold',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  viewHistoryButton: {
    width: Dimensions.get('window').width/1.3,
    height: Dimensions.get('window').width/7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#9AD3FF',
    margin: 10,
  },
  buttonLabel: {
    color: '#003A67',
    fontSize: Dimensions.get('window').width/20,
    fontWeight: '800',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default HomeScreen;
