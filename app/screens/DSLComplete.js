import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';


import { MedicalReportRepoContext, PrelimReportIdContext, PreliminaryReportRepoContext, DSLIdContext} from '../components/GlobalContextProvider';

import { useContext } from 'react';
import uiStyle from '../components/uiStyle';

function DSLComplete({ navigation }) {
  preliminaryReportRepoContext = useContext(PreliminaryReportRepoContext);
  const [dslId, setDSLId] = useContext(DSLIdContext);
  
  
  return (
    <SafeAreaView style={uiStyle.container}>
      <ScrollView>
        <SafeAreaView style={uiStyle.container}>
          <Text style={uiStyle.titleText}>Daily Symptom Log Complete</Text>
          <Text style={uiStyle.stackedText}>
            You have successfully submitted your Daily Sympton Checkist, 
            please refer to action plan for further steps. 
            
          </Text>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          preliminaryReportRepoContext.getDSL(dslId).then((data)=>console.log(data));
          navigation.navigate('Home Page');
          
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.startCheckText}>Return to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const title = '#000000';
const text = '#fff';
const background = '#fff';
const buttons = '#ff0000';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: background,
    justifyContent: 'center',
  },
  startCheckButton: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: buttons,
    top: 50,
  },
  startCheckText: {
    color: text,
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleText: {
    color: title,
    fontSize: 30,
    position: 'absolute',
    top: 60,
    fontWeight: 'bold',
  },
});

export default DSLComplete;
