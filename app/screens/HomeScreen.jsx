import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Alert,
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
      <View style={styles.container}>
        <TouchableOpacity onPress={createAlert} style={styles.startCheckButton}>
          <Text style={styles.startCheckText}>Begin Check</Text>
        </TouchableOpacity>
        {/*<Button style={styles.startCheckText} {'Start Check'} onPress={createAlert} />*/}
      </View>
      <View style={styles.container2}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Choose Profile')}
          style={uiStyle.bottomButton}
        >
          <Text style={uiStyle.buttonLabel}>View History</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    
  );
}

// https://reactnative.dev/docs/colors
const title = '#000000';
const text = '#fff';
const background = '#fff';
const buttons = '#ff3333';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: background,
  },
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  startCheckButton: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: buttons,
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
});

export default HomeScreen;
