import * as React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  Dimensions,
  ImageBackground
} from 'react-native';

import { MedicalReportRepoContext, PrelimReportIdContext } from '../../components/GlobalContextProvider';

import { useContext } from 'react';
import uiStyle from '../../components/uiStyle';

function BTComplete({ navigation }) {
  const [prelimReportId] = useContext(PrelimReportIdContext)
  const medicalReportRepoContext = useContext(MedicalReportRepoContext);
  return (
    <SafeAreaView style={uiStyle.container}>
      <ImageBackground style={styles.image} 
          source = {require('../../../assets/b3.png')}>
      <ScrollView>
        <SafeAreaView style={uiStyle.container}>
          <Text style={uiStyle.titleText}>Balance Test Complete</Text>
          <Text style={uiStyle.stackedText}>
            You have successfully completed the first balance test. Press next
            to continue to the second balance test. 
            
          </Text>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Balance Test 4');
        }}
        style={[styles.bottomButton, uiStyle.shadowProp]}
      >
        <Text style={uiStyle.startCheckText}>Next</Text>
      </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomButton: {
    width: Dimensions.get('window').width/1.3,
    height: Dimensions.get('window').width/7.5,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: (Dimensions.get('window').height)/2.2,
    marginTop: (Dimensions.get('window').height)/300,
    alignSelf: 'center',
  },
  image: {
    width: Dimensions.get('window').width/0.99,
    height: Dimensions.get('window').height/1.12,
    resizeMode: 'cover',
  }
});

export default BTComplete;
