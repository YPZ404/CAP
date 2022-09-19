import * as React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import { useContext, useState, useRef, useEffect } from 'react';

import uiStyle from "../../components/uiStyle";

function HTComplete({ navigation }) {
  const [hops, onChangedHops] = useState('');

  return (
    <SafeAreaView style={uiStyle.container}>
      <ScrollView>
        <SafeAreaView style={uiStyle.container}>
          <Text style={uiStyle.titleText}>Hop Test Confirmation</Text>
          <Text style={uiStyle.stackedText}>Enter the number of hops</Text>
          <SafeAreaView style={styles.inputAreaContainer}>
            <TextInput
              style={styles.input}
              onChangeText={onChangedHops}
              value={hops}
              placeholder="Hops"
              keyboardType="number-pad"
              returnKeyType="done"
            />
          </SafeAreaView>
        </SafeAreaView>
      </ScrollView>
      
      <TouchableOpacity
        onPress={() => {
          console.log(hops)
          navigation.navigate("Hop Test Form");
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputAreaContainer: {
    alignItems: 'center',
    backgroundColor: '#9AD3FF',
    marginBottom: (Dimensions.get('window').height),
    marginTop: (Dimensions.get('window').height)/45,
  },
  input: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').width / 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: (Dimensions.get('window').height) / 80,
    marginTop: (Dimensions.get('window').height) / 80,
    borderRadius: 20,
    padding: Dimensions.get('window').width / 50,
    backgroundColor: '#FFFFFF',
  }
});

export default HTComplete;
