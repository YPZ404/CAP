import * as React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import uiStyle from '../../components/uiStyle';

function HTComplete({ route, navigation }) {
  const hopTestRoute = route.params;
  var hopTestPreFormResult = Object.values(hopTestRoute)[0]
  var hopTestCountResult = Object.values(hopTestRoute)[1]
  var hopTestPostFormResult = Object.values(hopTestRoute)[2]
  console.log(hopTestPreFormResult)
  console.log(hopTestCountResult)
  console.log(hopTestPostFormResult)

  return (
    <SafeAreaView style={uiStyle.container}>
      <ScrollView>
        <SafeAreaView style={uiStyle.container}>
          <Text style={uiStyle.titleText}>Hop Test Complete</Text>
          <Text style={uiStyle.stackedText}>
            You have successfully completed the hop test. Press next
            to continue with testing. 
            
          </Text>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Memory Test 5 Intro');
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


export default HTComplete;
