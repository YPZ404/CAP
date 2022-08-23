import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import uiStyle from '../../components/uiStyle.jsx';

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */
function MTOne({ navigation }) {
  return (
    <View style={uiStyle.container}>
      <ScrollView>
        <Text style={styles.text}>
            {'\n'} {'\n'}
          Welcome to the first memory test.{'\n'}
          {'\n'}
          The affected person will be presented with three images to remember.
          {'\n'}
          {'\n'}
          They will be tested on these images once now and then again at the end
          other assessments. {'\n'}
          {'\n'}
          Please pass the phone to the affected person. {'\n'}
            {'\n'}
        </Text>
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate('Memory Test 2')}
        style={styles.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Start!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        lineHeight: 25,
        letterSpacing: 0.3,
        marginHorizontal: 30,
        marginVertical: 20,

    },
    bottomButton: {
        // consistent with "View History" button on Home screen, i.e long red button on bottom
        width: 300,
        height: 50,
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 20,
        alignSelf: 'center',
    }
});

export default MTOne;
