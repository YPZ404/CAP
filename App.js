import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import { View, TouchableOpacity, Dimensions} from 'react-native';
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

import Header from './Header';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();



function CustomNavContent(){

  return (
    <RootStack.Navigator drawerContent={(props) => <CustomDrawerContent {...props}/>}>
      <RootStack.Screen 
        name="Disclaimer" 
        component={Disclaimer}
        options={{
          headerTitle: () => <Header name="Disclaimer"></Header>,
          headerStyle: {
            height: (Dimensions.get('window').height)/6,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            backgroundColor: '#9AD3FF',
            elevation: 25
          }
        }}
      />
    <RootStack.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        headerTitle: () => <Header name=""></Header>,
        headerStyle: {
          height: (Dimensions.get('window').height)/9,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          backgroundColor: '#9AD3FF',
          elevation: 25
        }
      }}

    />
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
    <RootStack.Screen name="Report Screen" component={ReportScreen} />
    <RootStack.Screen
      name="Red flags checklist"
      component={RedFlagsChecklist}
    />
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
  </RootStack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={(props) => <CustomDrawerContent {...props}/>}>
      <Drawer.Screen name="Home Page" component={CustomNavContent} />
      <Drawer.Screen name="Profile" component={ChooseProfileScreen} />
      <Drawer.Screen name="Preliminary Tests" component={FurtherTestsScreen} />
      <Drawer.Screen name="Concussion Action Plan" component={ActionPlanScreen} />
      <Drawer.Screen name="VOMS Tests" component={VOMSStart} /> 
    </Drawer.Navigator>
  );
}

/**
 * The entry point for the application.
 *
 * Contains the root navigation stack.
 */
 export default function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
      <MyDrawer />
      </NavigationContainer>
    </GlobalContextProvider>
  );
}
