import * as React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import uiStyle from "../../components/uiStyle";

function HTComplete({ navigation }) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <ScrollView>
        <SafeAreaView style={uiStyle.container}>
          <Text style={uiStyle.titleText}>Hop Test Form</Text>
          <Text style={uiStyle.stackedText}>
            Fill out the form for symptoms:
          </Text>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Memory Test 5 Intro");
        }}
        style={uiStyle.bottomButton}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HTComplete;
