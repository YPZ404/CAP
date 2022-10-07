import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import { View, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './app/screens/HomeScreen';
import MechanismOfInjuryCheck from './app/screens/MechanismOfInjuryCheck';
import CreateProfileScreen from './app/screens/CreateProfileScreen';
import SelectProfileScreen from './app/screens/SelectProfileScreen';
import RedFlagsChecklist from './app/screens/RedFlagsChecklist';
import BadCheckScreen from './app/screens/BadCheckScreen';
import TextQuestionScreen from './app/screens/TextQuestionScreen';
import SecondCheckResults from './app/screens/SecondCheckResults';
import SampleDatabaseScreen from './app/screens/SampleDatabaseScreen';
import MTOne from './app/screens/MemoryTests/MTOne';
import MTTwo from './app/screens/MemoryTests/MTTwo';
import MTThree from './app/screens/MemoryTests/MTThree';
import MTFour from './app/screens/MemoryTests/MTFour';
import MTFive from './app/screens/MemoryTests/MTFive';
import MTFiveIntro from './app/screens/MemoryTests/MTFiveIntro';


import ChooseProfileScreen from './app/screens/ChooseProfileScreen';
import ProfileInfoScreen from './app/screens/ProfileInfoScreen';
import ReportScreen from './app/screens/ReportScreen';
import ActionPlanScreen from './app/screens/ActionPlanScreen';
import HeadBumpsScreen from './app/screens/HeadBumpsScreen';

import NextStepsScreen from './app/screens/NextStepsScreen';
import ChecklistQuestionScreen from './app/screens/RedFlagsChecklist';
import { GlobalContextProvider } from './app/components/GlobalContextProvider';

import PCSSChecklist from './app/screens/PCSSChecklist';
import DSLScreen from './app/screens/DSLScreen';
import FurtherTestsScreen from './app/screens/FurtherTestsScreen';
import FurtherTestsResultsScreen from './app/screens/FurtherTestsResultsScreen';
import PrelimTestResultScreen from './app/screens/PrelimTestResultScreen';
import RTOne from './app/screens/ReactionTests/RTOne';
import RTTwo from './app/screens/ReactionTests/RTTwo';
import RTThree from './app/screens/ReactionTests/RTThree';
import BTOne from './app/screens/BalanceTests/BTOne';
import BTTwo from './app/screens/BalanceTests/BTTwo';
import BTThree from './app/screens/BalanceTests/BTThree';


import VOMSStart from './app/screens/VOMSTests/VOMSStart';
import VOMSInitialSymptoms from './app/screens/VOMSTests/VOMSInitialSymptoms';

import VOR1 from './app/screens/VOMSTests/Row3VOR/VOR1';
import VOR2 from './app/screens/VOMSTests/Row3VOR/VOR2';
import VOR3 from './app/screens/VOMSTests/Row3VOR/VOR3Response5';
import VOR4 from './app/screens/VOMSTests/Row3VOR/VOR4';
import VOR5 from './app/screens/VOMSTests/Row3VOR/VOR5';
import VOR6 from './app/screens/VOMSTests/Row3VOR/VOR6Response6';

import SP1 from './app/screens/VOMSTests/Row1SmoothPursuits/SP1';
import SP2 from './app/screens/VOMSTests/Row1SmoothPursuits/SP2';
import SP3Response1 from './app/screens/VOMSTests/Row1SmoothPursuits/SP3Response1';
import SP4 from './app/screens/VOMSTests/Row1SmoothPursuits/SP4';
import SP5 from './app/screens/VOMSTests/Row1SmoothPursuits/SP5';
import SP6Response2 from './app/screens/VOMSTests/Row1SmoothPursuits/SP6Response2';

import S1 from './app/screens/VOMSTests/Row2Saccades/S1';
import S2 from './app/screens/VOMSTests/Row2Saccades/S2';
import S3Response2 from './app/screens/VOMSTests/Row2Saccades/S3Response3';
import S4 from './app/screens/VOMSTests/Row2Saccades/S4';
import S5 from './app/screens/VOMSTests/Row2Saccades/S5';
import S6 from './app/screens/VOMSTests/Row2Saccades/S6Response3';
import Disclaimer from './app/screens/Disclaimer';
import NPC1 from './app/screens/VOMSTests/Row4NPC/NPC1';
import NPC2 from './app/screens/VOMSTests/Row4NPC/NPC2';
import NPC3 from './app/screens/VOMSTests/Row4NPC/NPC3';
import NPC4 from './app/screens/VOMSTests/Row4NPC/NPC4Response7';

import VMS1 from './app/screens/VOMSTests/ROW5VMS/VMS1';
import VMS2 from './app/screens/VOMSTests/ROW5VMS/VMS2';
import VMS3 from './app/screens/VOMSTests/ROW5VMS/VMS3';
import BTFour from './app/screens/BalanceTests/BTFour';
import BTFive from './app/screens/BalanceTests/BTFive';
import BTComplete from './app/screens/BalanceTests/BTComplete';
import BTComplete2 from './app/screens/BalanceTests/BTComplete2';

import HTOne from './app/screens/HopTests/HTOne';
import HTTwo from './app/screens/HopTests/HTTwo';
import HTComplete from './app/screens/HopTests/HTComplete';
import HTConfirm from "./app/screens/HopTests/HTConfirm";
import HTForm from "./app/screens/HopTests/HTForm";
import HTForm2 from "./app/screens/HopTests/HTForm2";

import Header from './Header';
import LoginScreen from './app/screens/Login';
import AllReports from './app/screens/AllReports';
import AllPrelimReports from './app/screens/AllPrelimReports';
import AllIncidentReports from './app/screens/AllIncidentReports';
import DSLComplete from './app/screens/DSLComplete';
import { ViewPagerAndroidBase } from 'react-native';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const OpenStack = createStackNavigator();

function OpenDisclaimer(){
  return (
      <OpenStack.Navigator screenOptions={{headerShown: false}}>
          <OpenStack.Screen 
              name="Disclaimer" 
              component={Disclaimer}
              options={{
                headerTitle: () => <Header name="Disclaimer"></Header>,
                headerLeft: () => (
                  <View testID={'menu_view'}
                  accessible={true}
                  accessibilityLabel={'menu_view'}
                  name='menu_view'
                  component='menu_view'>
                    
                    <TouchableOpacity testID={'menu_button'}
                      accessible={true}
                      accessibilityLabel={'menu_button'}
                      name='menu_button'
                      component='menu_button'
                      style={{marginLeft: 15}}>
                      <MaterialCommunityIcons testID='dots-vertical'
                      name='dots-vertical' 
                      component='dots-vertical' 
                      accessible={true}
                      accessibilityLabel={'dots-vertical'}
                      size={28} color='#000'/>
                    </TouchableOpacity>
                  </View>
                ),
                headerStyle: {
                  height: (Dimensions.get('window').height)/6,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  backgroundColor: '#9AD3FF',
                  elevation: 25
                }
              }}
          />
      </OpenStack.Navigator>
  );
}

function CustomNavContent(){
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
    <RootStack.Screen name="Home" component={HomeScreen}/>
    <RootStack.Screen name="HEAD BUMPS" component={HeadBumpsScreen} />
    <RootStack.Screen
      name="Choose Profile"
      component={ChooseProfileScreen}
    />
    <RootStack.Screen
      name="Sample Database"
      component={SampleDatabaseScreen}
    />
    <RootStack.Screen
      name="Create Profile"
      component={CreateProfileScreen}
    />
    <RootStack.Screen
      name="Select Profile"
      component={SelectProfileScreen}
    />
    <RootStack.Screen name="Profile Info" component={ProfileInfoScreen} />
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="Red flags checklist" component={RedFlagsChecklist} />
    <RootStack.Screen name="PCSS Checklist" component={PCSSChecklist} />
    <RootStack.Screen name="Next Steps" component={NextStepsScreen} />
    <RootStack.Screen
      name="Mechanism Of Injury Check"
      component={MechanismOfInjuryCheck}
    />
    <RootStack.Screen
      name="Text Question (IR3)"
      component={TextQuestionScreen}
    />
    <RootStack.Screen
      name="All Reports"
      component={AllReports}
    />
    <RootStack.Screen
      name="Prelim Report"
      component={AllPrelimReports}
    />
    <RootStack.Screen
      name="Incident Reports"
      component={AllIncidentReports}
    />
    <RootStack.Screen
      name="Checklist Question (Start Check)"
      component={ChecklistQuestionScreen}
    />
    <RootStack.Screen name="Check Result" component={BadCheckScreen} />
    <RootStack.Screen
      name="Incident Report Result"
      component={SecondCheckResults}
    />
    <RootStack.Screen
      name="Further Tests"
      component={FurtherTestsScreen}
      options={{ title: 'Preliminary Tests ' }}
    />

<RootStack.Screen
      name="Prelim Test Results"
      component={PrelimTestResultScreen}
    />

    <RootStack.Screen
      name="Further Tests Results"
      component={FurtherTestsResultsScreen}
    />

    <RootStack.Screen name="Memory Test 1" component={MTOne} options={{ title: 'Memory Test ' }} />
    <RootStack.Screen name="Memory Test 2" component={MTTwo} options={{ title: 'Memory Test 1' }} />
    <RootStack.Screen name="Memory Test 3" component={MTThree} options={{ title: 'Memory Test 1 ' }}  />
    <RootStack.Screen name="Memory Test 4" component={MTFour} options={{ title: 'Memory Test 1' }}  />

    <RootStack.Screen name="Reaction Test 1" component={RTOne} options={{ title: 'Reaction Test ' }}/>
    <RootStack.Screen name="Reaction Test 2" component={RTTwo} options={{ title: 'Reaction Test ' }}/>
    <RootStack.Screen name="Reaction Test 3" component={RTThree} />


    <RootStack.Screen name="Balance Test 1" component={BTOne} options={{ title: 'Balance Tests ' }} />
    <RootStack.Screen name="Balance Test 2" component={BTTwo} options={{ title: 'Balance Test 1 ' }}/>
    <RootStack.Screen name="Balance Test 3" component={BTThree} />
    <RootStack.Screen name="Balance Test 4" component={BTFour} options={{ title: 'Balance Test 2 ' }}/>
    <RootStack.Screen name="Balance Test 5" component={BTFive} />
    <RootStack.Screen name="Balance Test Complete" component={BTComplete} options={{ title: 'Balance Test 1 Complete ' }} />
    <RootStack.Screen name="Balance Test Complete 2" component={BTComplete2} options={{ title: 'Balance Tests Complete ' }} />

    <RootStack.Screen name="Hop Test 1" component={HTOne} options={{ title: 'Hop Test ' }} />
    <RootStack.Screen name="Hop Test 2" component={HTTwo} options={{ title: 'Hop Test 1 ' }} />
    <RootStack.Screen name="Hop Test Confirm" component={HTConfirm} options={{ title: 'Hop Test Confirm ' }} />
    <RootStack.Screen name="Hop Test Form" component={HTForm} options={{ title: 'Hop Test Form ' }} />
    <RootStack.Screen name="Hop Test Form 2" component={HTForm2} options={{ title: 'Hop Test Form 2' }} />
    <RootStack.Screen name="Hop Test Complete" component={HTComplete} options={{ title: 'Hop Test Complete ' }} />

    <RootStack.Screen name="Memory Test 5 Intro" component={MTFiveIntro} options={{ title: 'Memory Test 2' }}  />
    <RootStack.Screen name="Memory Test 5" component={MTFive} options={{ title: 'Memory Test 2' }}  />


    <RootStack.Screen name="VOMS Start" component={VOMSStart} />
    <RootStack.Screen
      name="VOMS Initial Symptoms"
      component={VOMSInitialSymptoms}
    />

    <RootStack.Screen name="VOMS Smooth Pursuits 1" component={SP1} />
    <RootStack.Screen name="VOMS Smooth Pursuits 2" component={SP2} />
    <RootStack.Screen
      name="VOMS Smooth Pursuits 3 Response 1"
      component={SP3Response1}
    />
    <RootStack.Screen name="VOMS Smooth Pursuits 4" component={SP4} />
    <RootStack.Screen name="VOMS Smooth Pursuits 5" component={SP5} />
    <RootStack.Screen
      name="VOMS Smooth Pursuits 6 Response 2"
      component={SP6Response2}
    />

    <RootStack.Screen name="VOMS Saccades 1" component={S1} />
    <RootStack.Screen name="VOMS Saccades 2" component={S2} />
    <RootStack.Screen
      name="VOMS Saccades 3 Response 3"
      component={S3Response2}
    />
    <RootStack.Screen name="VOMS Saccades 4" component={S4} />
    <RootStack.Screen name="VOMS Saccades 5" component={S5} />
    <RootStack.Screen name="VOMS Saccades 6 Response 4" component={S6} />

    <RootStack.Screen name="VOMS VOR 1" component={VOR1} />
    <RootStack.Screen name="VOMS VOR 2" component={VOR2} />
    <RootStack.Screen name="VOMS VOR 3 Response 5" component={VOR3} />
    <RootStack.Screen name="VOMS VOR 4" component={VOR4} />
    <RootStack.Screen name="VOMS VOR 5" component={VOR5} />
    <RootStack.Screen name="VOMS VOR 6 Response 6" component={VOR6} />

    <RootStack.Screen name="VOMS NPC 1" component={NPC1} />
    <RootStack.Screen name="VOMS NPC 2" component={NPC2} />
    <RootStack.Screen name="VOMS NPC 3" component={NPC3} />
    <RootStack.Screen name="VOMS NPC 4 Response 7" component={NPC4} />

    <RootStack.Screen name="VOMS VMS 1" component={VMS1} />
    <RootStack.Screen name="VOMS VMS 2" component={VMS2} />
    <RootStack.Screen name="VOMS VMS 3 Response 8" component={VMS3} />
    <RootStack.Screen name="DSL Complete" component={DSLComplete}/>
  </RootStack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView testID='drawer_scrollView' accessible={true} accessibilityLabel={'drawer_scrollView'} {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props}/>}>
      <Drawer.Screen setOptions={{headerShown: false}} name="Start" component={OpenDisclaimer} 
        options={{
          headerTitle: () => <Header name="Disclaimer"></Header>,
          headerLeft: () => (<View testID={'header_left_myDrawer'}
                                    accessible={true}
                                    accessibilityLabel={'header_left_myDrawer'}
                                    name='header_left_myDrawer'
                                    component='header_left_myDrawer'/>),
          headerStyle: {
            height: (Dimensions.get('window').height)/6,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: '#9AD3FF',
            elevation: 25
          }
        }}/>
      <Drawer.Screen name="Home Page" component={HomeScreen} 
        options={{
          headerTitle: () => <Header name=""></Header>,
          headerStyle: {
            height: (Dimensions.get('window').height)/9,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: '#E2F2FF',
            elevation: 25
          }
        }}/>
      <Drawer.Screen testID='Login' accessible={true} accessibilityLabel={'Login'} name="Login" component={LoginScreen} />
      <Drawer.Screen testID='Reports' accessible={true} accessibilityLabel={'Reports'} name="Reports" component={AllReports} />
      <Drawer.Screen testID='Preliminary Tests' accessible={true} accessibilityLabel={'Preliminary Tests'} name="Preliminary Tests" component={FurtherTestsScreen} />
      <Drawer.Screen testID='Daily Symptom Checklist' accessible={true} accessibilityLabel={'Daily Symptom Checklist'} name="Daily Symptom Checklist" component={DSLScreen}/>
      <Drawer.Screen testID='Concussion Action Plan' accessible={true} accessibilityLabel={'Concussion Action Plan'} name="Concussion Action Plan" component={ActionPlanScreen} />
      <Drawer.Screen testID='VOMS tests' accessible={true} accessibilityLabel={'VOMS Tests'} name="VOMS Tests" component={VOMSStart} /> 
      <Drawer.Screen testID='Continue Tests' accessible={true} accessibilityLabel={'Continue Tests'} name="Continue Tests" component={CustomNavContent} 
    
       options={{
        headerTitle: () => <Header name=""></Header>,
        headerStyle: {
          height: (Dimensions.get('window').height)/9,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: '#E2F2FF',
          elevation: 25
        }
      }}/>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({

  TestHeader: {
    height: (Dimensions.get('window').height)/9,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: '#E2F2FF',
          elevation: 25
  }

});


/**
 * The entry point for the application.
 *
 * Contains the root navigation stack.
 */
 export default function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer >
          <MyDrawer />
      </NavigationContainer>
    </GlobalContextProvider>
  );
}
