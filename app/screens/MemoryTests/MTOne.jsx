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
 * The screen will be performed memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */
function MTOne({ navigation }) {
  return (

    //<SafeAreaView style={uiStyle.container}>
    <View style={styles.container}>
      <Text style={uiStyle.titleText}>Preliminary Test</Text>
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
        <Text style={styles.buttonLabel}>Start!</Text>
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

    buttonLabel: {
        // consistent with "View History" button on Home screen, i.e. white text in the button
        color: '#003A67',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#9AD3FF',
    },

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
    }
});

export default MTOne;
