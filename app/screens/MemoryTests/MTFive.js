import * as React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import uiStyle from '../../components/uiStyle';

import { useContext, useState } from 'react';

import {
  IncidentReportRepoContext,
  ReportIdContext,
  MemoryCorrectAnswerContext,
  PrelimReportIdContext,
  PreliminaryReportRepoContext,
  MemoryTestReportRepoContext
} from '../../components/GlobalContextProvider';
import DisplayOptions from '../../components/MemoryTests/DisplayOptions';
import { getShuffledOptions } from '../../model/constants/MemoryTestOptions';

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 */
function MTFive({ navigation }) {
  // Context variables
  const [prelimReportId] = useContext(PrelimReportIdContext); 
  const [responses, setResponses] = useState(null);
  const [memoryCorrectAnswerContext] = useContext(MemoryCorrectAnswerContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const preliminaryReportRepoContext = useContext(PreliminaryReportRepoContext);
  const memoryTestReportRepoContext = useContext(MemoryTestReportRepoContext);


  // Local state
  const [options] = useState(getShuffledOptions());

  function isEqual(a, b)
  {
    var counter = 3;
    for(var i=0;i<a.length;i++){
      if(!(a.includes(b[i]))){
        counter--;
      }
    }
    return counter;
  }
  const handleCreateMultiResponse = (res) => {
    const desc = 'Memory Test Part 2';
    incidentRepoContext.setMultiResponse(reportId, desc, res).then((r) => {});
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

          memoryCorrectAnswerContext.sort();
          chosenList.sort();
  
          const result = isEqual(memoryCorrectAnswerContext,chosenList);
          console.log(result);
          memoryTestReportRepoContext.updateMemoryTest2Result(prelimReportId,result);
          memoryTestReportRepoContext.getCurrentReportInformation(prelimReportId).then((data) => console.log(data));

          if(result == 3){
            preliminaryReportRepoContext.updateMemoryTest1Result(prelimReportId,1);
          }
          else{
            preliminaryReportRepoContext.updateMemoryTest1Result(prelimReportId,0);
          }
          preliminaryReportRepoContext.getCurrentReportInformation(prelimReportId).then(data => console.log(data));

          navigation.navigate('Prelim Test Results', {
            secondMemoryTestResponses: chosenList,
          });


        }}
        style={styles.bottomButton}
      >
        <Text style={styles.buttonLabel}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  allCheckboxContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 1,
  },

  checkboxBase: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: '#C4C4C4',
  },

  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 14,
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

export default MTFive;
