import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { useEffect, useContext, useState, useRef } from 'react';
import {
  IncidentReportRepoContext,
  ReportIdContext,
  PrelimReportIdContext,
  PreliminaryReportRepoContext
} from '../components/GlobalContextProvider';
import uiStyle from '../components/uiStyle';


const reactionThreshold = 500;
const parseReactionTest = (rt) => {
  const reactionTestResponses = [];
  if ((rt.time_attempt_1 < reactionThreshold || rt.time_attempt_2 < reactionThreshold || rt.time_attempt_3 < reactionThreshold)) {
    reactionTestResponses.push('Reaction Test Result: Passed');
  } else {
    reactionTestResponses.push('Reaction Test Result: Failed');
  }
  return reactionTestResponses;
};

/**
 * The screen will be perform memory test.
 * This is the first test out of the Further Tests
 * After this test is completed, user needs to navigate to the next test which
 * is Reaction Test.
 * @param {boolean} route.params.secondMemoryTestResponses response of the second memory test. Inserting from the
 * previous screen tends to be too slow.
 */
function PrelimTestResultScreen({ route, navigation }) {
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const [reportId] = useContext(ReportIdContext);
  const [mtAndBtResults, setMTBTResults] = useState([]);
  const [reportResults, setReportResults] = useState([]);
  const [reactionTest, setReactionTest] = useState(null);
  const preliminaryReportRepoContext = useContext(PreliminaryReportRepoContext);
  const [prelimReportId] = useContext(PrelimReportIdContext);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true; // Component is mounted
    return () => {
      // Component is unmounted
      mounted.current = false;
    };
  }, []);
  useEffect(() => {
    preliminaryReportRepoContext
        .getCurrentReportInformation(prelimReportId)
        .then((data) => setReportResults(data)); 
    
  }, [preliminaryReportRepoContext, prelimReportId]);
  let allTestResults = [];
  var dict = {0:'FAIL', 1:'PASS'};
  Object.entries(reportResults).forEach(([key, value]) => {
    switch(key){
      case 'memory_test1_result':
        allTestResults.push(
          <Text key={0} style={uiStyle.text}>
            {'Memory Test 1 Result: ' + dict[value]}
          </Text>,
          
        );
        break
      case 'memory_test2_result':
        allTestResults.push(
          <Text key={1} style={uiStyle.text}>
            {'Memory Test 2 Result: ' + dict[value]}
          </Text>,
        );
        break
      case 'reaction_test_result':
        allTestResults.push(
          <Text key={2} style={uiStyle.text}>
            {'Reaction Test Result: ' + dict[value]}
          </Text>,
        );
        break
      case 'balance_test1_result':
        allTestResults.push(
          <Text key={3} style={uiStyle.text}>
            {'Balance Test 1 Result: ' + dict[value]}
          </Text>,
        );
        break
      case 'balance_test2_result':
        allTestResults.push(
          <Text key={4} style={uiStyle.text}>
            {'Balance Test 2 Result: ' + dict[value]}
          </Text>,
        );
      
      
     

    }

    console.log(key , value); // key ,value
    
  });
  // if (reportResults.length > 0) {
  //   let i = 0;
  //   for (; i < mtAndBtResults.length; i++) {
  //     allTestResults.push(
  //       <Text key={i} style={uiStyle.text}>
  //         {reportResults[i]}
  //       </Text>,
  //     );
  //   }
    
  // }

  return (
    <View style={uiStyle.container}>
      <Text style={uiStyle.titleText}>Preliminary Tests Results</Text>
      <ScrollView>{allTestResults}</ScrollView>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.navigate('Create Profile')}
      >
        <Text style={uiStyle.buttonLabel}>Save to new profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.navigate('Select Profile')}
      >
        <Text style={uiStyle.buttonLabel}>Save to existing profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={uiStyle.buttonLabel}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomButton: {
    marginLeft: 10,
    width: 300,
    height: 50,
    padding: 10,
    marginVertical: 10,
    borderRadius: 100,
    backgroundColor: '#FB582F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PrelimTestResultScreen;
