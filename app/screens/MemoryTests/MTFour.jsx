import * as React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
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
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default MTFour;
