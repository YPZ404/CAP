import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import uiStyle from '../../components/uiStyle';

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */
function RTOne({ navigation }) {
  return (
    <View style={uiStyle.container}>
      <ScrollView>
        <SafeAreaView style={uiStyle.container}>
          <Text style={uiStyle.titleText}>Reaction Test</Text>
            <Text style={uiStyle.stackedText}>
              On the next screen, there will be a red start
              button. Press anywhere to start.
              {'\n'}
              {'\n'}
              A blue circle will be presented which turns yellow after a
              period of time. You should press the button as soon as it 
              turns yellow.
              {'\n'} {'\n'}
              Your reaction time will be recorded, and the test will run 
              three times.
            </Text>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Reaction Test 2')}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  startCheckButton: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ff0000',
  },

  startCheckText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default RTOne;
