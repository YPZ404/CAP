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
  MemoryCorrectAnswerContext,
  PreliminaryReportRepoContext,
  PrelimReportIdContext,
} from '../../components/GlobalContextProvider';
import DisplayOptions from '../../components/MemoryTests/DisplayOptions';
import { getShuffledOptions } from '../../model/constants/MemoryTestOptions';
import MyCheckbox from "../../components/MyCheckbox";
import updateProps from "react-native-reanimated/src/reanimated2/UpdateProps";
import cbStyle from "../../components/checkboxStyle";
import {Ionicons} from "@expo/vector-icons";

/**a
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */

function MTFour({ navigation }) {
  // Context variables
  const [prelimReportId] = useContext(PrelimReportIdContext); 
  const [memoryCorrectAnswerContext] = useContext(MemoryCorrectAnswerContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const preliminaryReportRepoContext = useContext(PreliminaryReportRepoContext);
  
  // Local state
  const [options] = useState(getShuffledOptions());


  function isEqual(a, b)
  {
      return a.join() == b.join();
  }

  const handleCreateMultiResponse = (res) => {
    // const desc = 'Memory Test Part 1';
    // incidentRepoContext.setMultiResponse(reportId, desc, res).then((r) => {});
    // console.log(memoryCorrectAnswerContext);
    // console.log(res)
    
  };

  // const handleCreateMultiResponse = (res) => {
  //   const desc = 'Memory Test Part 1';
  //   incidentRepoContext.setMultiResponse(reportId, desc, res).then((r) => {
  //       incidentRepoContext
  //           .getMultiResponses(reportId)
  //           .then((mrs) => console.log(mrs));
  //       },
  //       (err) => console.log(err),
  //   );
  // };

  const MyCheckbox = (props) => {
      const [checked, onChange] = useState(false);

      function onCheckmarkPress() {
          onChange(!checked);
          onUpdate(props.value);
      }

      return (
          <Pressable
              style={[cbStyle.checkboxBase, checked && cbStyle.checkboxChecked]}
              onPress={onCheckmarkPress}
          >
              {checked && <Ionicons name="checkmark" size={24} color="black" />}
          </Pressable>
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#9AD3FF' }}>
      <Text style={uiStyle.text}>
        What three images does your patient remember?
      </Text>
      <ScrollView style={{ margin: 10 }}>
        <SafeAreaView style={styles.container}>
          <DisplayOptions options={options} updateOption={onUpdate} />
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          //Logic to generate Pass or fail mark

          memoryCorrectAnswerContext.sort();
          chosenList.sort();
          console.log(isEqual(memoryCorrectAnswerContext,chosenList));
        

          if(isEqual(memoryCorrectAnswerContext,chosenList) == true){
            preliminaryReportRepoContext.updateMemoryTest1Result(prelimReportId,1);
          }
          else{
            preliminaryReportRepoContext.updateMemoryTest1Result(prelimReportId,0);
          }
          preliminaryReportRepoContext.getCurrentReportInformation(prelimReportId).then(data => console.log(data));

          navigation.navigate('Reaction Test 1');
        }}
        style={styles.bottomButton}
      >
        <Text style={styles.buttonLabel}>Submit</Text>
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
        backgroundColor: '#9AD3FF',
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

export default MTFour;
