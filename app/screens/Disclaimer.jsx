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
import uiStyle from '../components/uiStyle';
import {useNavigation} from '@react-navigation/native';

function Disclaimer({ navigation }) {
 
  return (
    <SafeAreaView style={styles.screen}>
      <SafeAreaView style={uiStyle.container}>
        
          <Text style={styles.text}>
            This App does not represent a substitute for expert medical attention.
            {'\n'} {'\n'} 
            You must not rely on the information on this App as an alternative to
            medical advice from your doctor or other professional healthcare
            provider.
            {'\n'} {'\n'} 
            We strongly recommend that you consult your own physician or another
            available health professional regarding any diagnosis, findings,
            interpretation or course of treatment.
          </Text>
  
            <TouchableOpacity
              // onPress={() => navigation.navigate('Voms Start')}
              onPress={() => navigation.navigate('Home')}
              style={[styles.bottomButton, styles.shadowProp]}
            >
              <Text style={styles.buttonLabel}>I understand</Text>
            </TouchableOpacity>
        
      </SafeAreaView>
    </SafeAreaView>
  );
}


// Change the detailed styles of the disclaimer page
// Note: the general background color of this page is defined in the uiStyle.jsx
// Elements defined in the following:
// 1. "I understand" button
// 2. Text position
// 3. Text color

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9AD3FF',
  },
  text: {
    lineHeight: 20,
    letterSpacing: 0.3,
    marginHorizontal: 35,
    marginVertical: 90,
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },

  bottomButton: {
    width: 297,
    height: 59,
    padding: 10,
    borderRadius: 11,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    marginTop: 5,
    alignSelf: 'center',
  },

  buttonLabel: {
    // consistent with "View History" button on Home screen, i.e. white text in the button
    color: '#003A67',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },

});

export default Disclaimer;
