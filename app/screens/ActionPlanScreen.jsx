import * as React from 'react';
import {
	Text,
	FlatList,
	View,
	SafeAreaView,
	ScrollView,
  } from 'react-native';
import ExpandableTab from '../components/ExpandableTab';

import uiStyle from '../components/uiStyle';

function ActionPlanScreen({ navigation }) {
	return (
		<SafeAreaView>
			<ScrollView>
				<Text style={[uiStyle.text, {textAlign: "center"}]}>Concussion Action Plan</Text>
				<Text style={[{textAlign: "center", padding: 10}]}>Have your child complete the following zone and stepwise program. Aim to keep activity within the rating of perceived exertion (RPE) or heart rate guide (if your child has a heart rate monitoring device).{"\n\n"} Seek urgent medical attention if your child's symptoms worsen or if other symptoms appear.</Text>
				<ExpandableTab title="Red Zone" subtitle="Days 1 and 2 following injury" color="red" footer="After 2 days of acute rest, you may move on to the next zone.">
					<Text style={{fontWeight:"bold"}}>Rest your child from any physical or cognitive activity.{"\n\n\n"}</Text>
					<Text style={{fontWeight:"bold"}}>Supportive Care:{"\n\n"}</Text>
					<Text>
						- Encourage good sleep patterns. Rest your child with no TV, phone or disruptions.{"\n\n"}
						- Provide regular meals and a minimum of 2L of water per day.{"\n\n"}
						- Use over the counter headache medication as needed.{"\n\n"}
						- Complete the Symptoms Log Sheet, monitoring your child's symptoms and signs. Continue using the sheet until your child reaches 14 days without symptoms.{"\n\n"}
						- Encourage your child to have a positive mental attitude towards their recovery.
					</Text>
				</ExpandableTab>
				<ExpandableTab title="Orange Zone" subtitle="Until cleared for light activity" color="orange" footer="See your GP to check that your child may progress to the next zone. Your child must be symptom tolerant before moving on to Step 1">
					<Text style={{fontWeight:"bold"}}>Reccomendations:{"\n\n"}</Text>
					<Text>
						- Start low level physical and cognitive activity. Your child can now move around more freely.{"\n\n"}
						Activites may include:
						{"\n\t"}- less than 20 minutes of daily walking 
						{"\n\t"}- balance exercises (such as single leg stands or heel-toe walking)
						{"\n\t"}- cognitive tasks (such as reading){"\n\n"}
					</Text>
					<Text style={{fontWeight:"bold"}}>Supportive Care:{"\n\n"}</Text>
					<Text>
						- Try to reduce and/or stop headache medication once your child is more physically/mentally active.{"\n\n"}
						- Should sleep pattern remain a problem, then further assessment and possible treatment with Melatonin may be considered.
						This will require medical supervision and is best discussed with your local GP.
					</Text>
				</ExpandableTab>
				<ExpandableTab title="Yellow Zone" subtitle="GRADED RETURN TO ACTIVITY" color="#F0C54C"/>
				<ExpandableTab title="Green Zone" subtitle="RETURNING TO PRE-INJURY ACTIVITY" color="green"/>
			</ScrollView>
		</SafeAreaView>
	)
};

export default ActionPlanScreen;