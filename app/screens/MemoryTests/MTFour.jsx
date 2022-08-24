import * as React from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView, Pressable,
} from 'react-native';

import uiStyle from '../../components/uiStyle.jsx';

import { useContext, useState } from 'react';

import {
  IncidentReportRepoContext,
  ReportIdContext,
} from '../../components/GlobalContextProvider';
import DisplayOptions from '../../components/MemoryTests/DisplayOptions';
import { getShuffledOptions } from '../../model/constants/MemoryTestOptions';
import MyCheckbox from "../../components/MyCheckbox";
import updateProps from "react-native-reanimated/src/reanimated2/UpdateProps";
import cbStyle from "../../components/checkboxStyle";
import {Ionicons} from "@expo/vector-icons";

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */

function MTFour({ navigation }) {
  // Context variables
  const [reportId] = useContext(ReportIdContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);

  // Local state
  const [options] = useState(getShuffledOptions());


  const handleCreateMultiResponse = (res) => {
    const desc = 'Memory Test Part 1';
    incidentRepoContext.setMultiResponse(reportId, desc, res).then((r) => {
        incidentRepoContext
            .getMultiResponses(reportId)
            .then((mrs) => console.log(mrs));
        },
        (err) => console.log(err),
    );
  };



  // updates const list when onCheckmarkPress() is called
  function onUpdate(name) {
    let index = chosenList.indexOf(name);
    if (index === -1) {
      chosenList.push(name); // if it isn't stored add it to the array
    } else {
      chosenList.splice(index, 1); // if it is stored then remove it from the array
    }
    return { chosenList };
  }



  const chosenList = [];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={uiStyle.text}>
        What three images does your patient remember?
      </Text>
      <ScrollView style={{ margin: 10 }}>
        <SafeAreaView style={uiStyle.container}>
          <DisplayOptions options={options} updateOption={onUpdate} />
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          handleCreateMultiResponse(chosenList);

          navigation.navigate('Reaction Test 1');
        }}
        style={styles.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    bottomButton: {
        // consistent with "View History" button on Home screen, i.e long blue button on bottom avoiding colors like red and green
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

export default MTFour;
