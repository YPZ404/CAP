import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import uiStyle from '../../components/uiStyle';

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */
function MTFiveIntro({ navigation }) {
  return (
    
    <View style={uiStyle.container}>
      <View style={uiStyle.container}>
        <Text style={uiStyle.titleText}>Second Memory Test</Text>
        <Text style={uiStyle.stackedText}>
          On the following page the same checklist will be presented
          with the selections for the images presented in the beginning.
          {'\n'} 
          {'\n'} 
          Please pass the phone to the supervisor to enter the images the 
          patient remembers.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Memory Test 5')}
          style={uiStyle.bottomButton}
        >
          <Text style={uiStyle.buttonLabel}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default MTFiveIntro;
