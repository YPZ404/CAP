import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { useContext, useEffect, useState } from 'react';
import uiStyle from '../../components/uiStyle';
import {
  IncidentReportRepoContext,
  ReportIdContext,
} from '../../components/GlobalContextProvider';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function RTTwo({ navigation }) {
  const [attemptResults, setAttemptResults] = useState([]);
  const [reportId] = useContext(ReportIdContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);

  // Start time in milliseconds
  const [startMs, setStartMs] = useState(null);

  // Stage = button stage from start -> wait -> press
  const [stage, setStage] = useState(0);

  let btnStyle;
  let btnOnPress = () => {};
  let btnTxt;

  // Stage 0 is the start stage, waiting for user to press button
  if (stage === 0) {
    btnStyle = styles.startButton;
    btnOnPress = () => {
      setStage(1);
      setTimeout(() => {

        // Start timer as soon as the circle turns yellow
        setStartMs(Date.now());
        setStage(2);
      }, getRandomInt(2000, 5000)); // Wait between 2 and 5 seconds, then set to next stage
    };
    btnTxt = 'Start';

  // Stage 1 is the wait stage
  } else if (stage === 1) {
    btnTxt = 'Wait...';
    btnStyle = styles.waitButton;

  // Stage 2 is the press stage
  } else if (stage === 2) {
    btnTxt = 'Press!';
    btnStyle = styles.pressButton;
    btnOnPress = () => {

      setAttemptResults((prevAttemptResults) => [
        ...prevAttemptResults,
        Date.now() - startMs,
      ]);

      setStartMs(null);
      setStage(0);
    };
  }

  const threshold = 500;

  // Check if user has failed or passed tests 
  useEffect(() => {
    if (attemptResults.length === 3) {
      let grade = 'pass';
      if (attemptResults[0] >= threshold || attemptResults[1] >= threshold || 
        attemptResults[2] >= threshold) {
            grade = 'fail';
      }

      // Possibly get rid of this? Do we really need the average anymore?
      const avg = attemptResults.reduce((a, b) => a + b) / attemptResults.length;

      incidentRepoContext
        .setReactionTest(reportId, attemptResults, avg, grade)
        .catch(console.log);
      setAttemptResults([]);
      navigation.navigate('Balance Test 1', {
        attemptResults: attemptResults,
        avg: avg,
        grade: grade,
      });
    }
  }, [reportId, attemptResults, incidentRepoContext, navigation]);

  return (
    <View style={uiStyle.textContainer} onTouchStart={btnOnPress}>
      <View style={uiStyle.textContainer}>
        <TouchableOpacity style={[styles.reactionButton, btnStyle]}>
          <Text style={styles.startText}>{btnTxt}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reactionButton: {
    width: 300,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
  startButton: {
    backgroundColor: '#ff0000',
  },
  startText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  waitButton: {
    backgroundColor: '#1820EB',
  },
  pressButton: {
    backgroundColor: '#FAD826',
  },

  screenContainer: {
    padding: 10,
  },
  btnView: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default RTTwo;
