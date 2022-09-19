import * as React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Slider from '@react-native-community/slider';

import uiStyle from "../../components/uiStyle";

function HTForm2({ navigation }) {
  // const [reportId] = useContext(ReportIdContext);
  // const incidentRepoContext = useContext(IncidentReportRepoContext);

  const [sliderOneValue, setSliderOneValue] = React.useState(0);
  const [sliderTwoValue, setSliderTwoValue] = React.useState(0);
  const [sliderThreeValue, setSliderThreeValue] = React.useState(0);
  const [sliderFourValue, setSliderFourValue] = React.useState(0);

  return (
    <SafeAreaView style={uiStyle.container}>
      <ScrollView>
        <SafeAreaView style={uiStyle.container}>
          <Text style={uiStyle.titleText}>Hop Test Post-Test Form</Text>
          <Text style={uiStyle.text}>
            Do you have any of these symptoms?
          </Text>
        </SafeAreaView>
        
        <SafeAreaView style={[uiStyle.container]}>
          <SafeAreaView style={styles.sliders}>
            <SafeAreaView style={styles.sliderOne}>
              <Text style={uiStyle.text}>Headache:</Text>
              <Text style={[uiStyle.text]}>{sliderOneValue}</Text>
            </SafeAreaView>
            <Slider
              minimumValue={0}
              maximumValue={10}
              step={1}
              onValueChange={(val) => setSliderOneValue(val)}
            />
            <SafeAreaView style={styles.sliderOne}>
              <Text style={uiStyle.text}>Nausea:</Text>
              <Text style={[uiStyle.text]}>{sliderTwoValue}</Text>
            </SafeAreaView>
            <Slider
              minimumValue={0}
              maximumValue={10}
              step={1}
              onValueChange={(val) => setSliderTwoValue(val)}
            />
            <SafeAreaView style={styles.sliderOne}>
              <Text style={uiStyle.text}>Dizziness:</Text>
              <Text style={[uiStyle.text]}>{sliderThreeValue}</Text>
            </SafeAreaView>
            <Slider
              minimumValue={0}
              maximumValue={10}
              step={1}
              onValueChange={(val) => setSliderThreeValue(val)}
            />
            <SafeAreaView style={styles.sliderOne}>
              <Text style={uiStyle.text}>Fogginess:</Text>
              <Text style={[uiStyle.text]}>{sliderFourValue}</Text>
            </SafeAreaView>
            <Slider
              minimumValue={0}
              maximumValue={10}
              step={1}
              onValueChange={(val) => setSliderFourValue(val)}
            />
          </SafeAreaView>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          // incidentRepoContext
          //   .addVOMSSymptoms(
          //     reportId,
          //     'Smooth Pursuits Horizontal',
          //     sliderOneValue,
          //     sliderTwoValue,
          //     sliderThreeValue,
          //     sliderFourValue,
          //   )
          //   .catch(console.log);
          navigation.navigate("Memory Test 5 Intro");
        }}
        style={uiStyle.bottomButton}
      >
          <Text style={uiStyle.buttonLabel}>Next</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  sliders: {
    width: '80%',
  },

  sliderOne: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default HTForm2;
