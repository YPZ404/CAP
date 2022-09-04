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
function MTThree({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={uiStyle.titleText}>Instructions</Text>
        <Text style={uiStyle.stackedText}>
          Please pass the phone to your supervisor so they can input the
          results.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Memory Test 4')}
          style={styles.bottomButton}
        >
          <Text style={styles.buttonLabel}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomButton: {
    // consistent with "View History" button on Home screen, i.e long blue button on bottom avoiding colors like red and green
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 20,
    alignSelf: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#349BEB',
  },

  buttonLabel: {
    // consistent with "View History" button on Home screen, i.e. white text in the button
    color: '#003A67',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default MTThree;
