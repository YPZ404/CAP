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

import uiStyle from '../../components/uiStyle.jsx';

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
              On the next screen, the affected individual will see a red start
              button. Press anywhere to start.
              {'\n'}
              They will be presented with a blue circle, which they should tap on
              as quickly as they can after it turns yellow.
              {'\n'} {'\n'}
              The test will run three times.
              {'\n'} {'\n'}
              Please pass the phone to the affected person.
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
