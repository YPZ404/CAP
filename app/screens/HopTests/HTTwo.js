import * as React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Vibration,
  Alert,
} from "react-native";
import { Accelerometer } from "expo-sensors";

import uiStyle from "../../components/uiStyle";
import { useContext, useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

import { AgeHopTestContext } from "../../components/GlobalContextProvider";

function HTTwo({ navigation }) {
  const [ageHopTestContext] = useContext(AgeHopTestContext);
  const [text, setText] = useState("Start!");
  const startedText = () => setText("Recording!");
  const resetText = () => setText("Start!");
  const [subscription, setSubscription] = useState(null);

  var startTimer = null;
  var endTimer = null;
  const [started, setStarted] = useState(false);
  const focussed = useIsFocused();
  var hopCnt = 0;
  
  const createAlert = () => {
    var message = "Did you hop " + hopCnt
    if (hopCnt == 1) {
      message += " time?"
    }
    else {
      message += " times?"
    }
    Alert.alert("Alert", message, [
      {
        text: "Yes",
        onPress: () => navigation.navigate("Hop Test Form 2"),
      },
      {
        text: "No",
        onPress: () => navigation.navigate("Hop Test Confirm"),
      },
    ]);
  }

  useEffect(() => {
    if (focussed) {
      if (started) {
        startTimer = setTimeout(() => {
          Vibration.vibrate();
          _subscribe();
          startedText();
          endTimer = setTimeout(() => {
            Accelerometer.removeAllListeners();
            Vibration.vibrate();
            setSubscription(null);
            resetText();
            // storeResult(data);
            console.log("Hops: " + hopCnt);
            createAlert()
            // navigation.navigate("Hop Test Complete");
          }, 15000);
        }, 1000)
      } else {
        return () => {};
      }
    }
    return () => {
      Accelerometer.removeAllListeners();
      setSubscription(null);
      setStarted(false)
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [focussed, started]);

  const _subscribe = () => {
    var sameHop = false;
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        Accelerometer.setUpdateInterval(100);

        if (accelerometerData.y > 2.05) { 
          if (!sameHop) {
            hopCnt += 1;
            // console.log("hop" + " " + "y: " + accelerometerData.y);
          }
          sameHop = true;
          
        }
        else {
          sameHop = false;
        }
      
      })
    );
  };

  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.stackedText}>
        Hold the phone to your chest and click "Start!". Upon the vibration, begin hopping on your
        dominant foot (i.e. the foot you would usually kick a ball with) for 15 seconds. {"\n"}
        {"\n"}
      </Text>
      <TouchableOpacity
        onPress={() => {
          if (!subscription) {
            setStarted(true);
          }
        }}
        style={styles.startCheckButton}
      >
        <Text style={styles.startCheckText}>{text}</Text>
      </TouchableOpacity>
      <View style={uiStyle.textContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Hop Test 1");
          }}
          style={uiStyle.bottomButton}
        >
          <Text style={uiStyle.buttonLabel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const text = "#fff";
const buttons = "#ff3333";
const styles = StyleSheet.create({
  startCheckButton: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: buttons,
  },
  startCheckText: {
    color: text,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default HTTwo;
