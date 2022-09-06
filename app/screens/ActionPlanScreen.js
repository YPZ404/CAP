import {useEffect, useState} from 'react';
import {
	Text,
	Alert,
	SafeAreaView,
	ScrollView,
	View,
	TouchableOpacity,
	StyleSheet
  } from 'react-native';
import ExpandableTab from '../components/ExpandableTab';
import Badge from '../components/Badge';

import uiStyle from '../components/uiStyle';



function ActionPlanScreen({ navigation }) {
	const createAlert = () =>
    Alert.alert(
      'Alert',
      'Over the next few days, symptoms may worsen or other symptoms may appear. Watch out for HEAD BUMPS. If they occur, seek urgent medical attention',
      [
        {
          text: 'View Action Plan',
          onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: 'Check Symptoms',
          onPress: () => navigation.navigate('HEAD BUMPS'),
        },
      ],
    );

	const zones = {
		red: {
			color: "red",
			name: "Red"
		},
		orange: {
			color: "orange",
			name: "Orange"
		},
		yellow: {
			color: "#F0C54C",
			name: "Yellow"
		},
		green: {
			color: "green",
			name: "Green"
		}
	}
	const [activeZone, setActiveZone] = useState(zones.red);

	// whenever the data for injury date, doctor clearance or other symtom based information changes, update the zone.
	useEffect(() => {
		// for now, let's set the injury date to 2 days ago.
		var injuryDate = new Date();
		injuryDate.setDate(injuryDate.getDate() - 2);

		// calculate how long it was since the injury
		var today = new Date();
		var difference = today.getTime() - injuryDate.getTime();
		var daysSinceInjury =  Math.floor(difference / (1000 * 3600 * 24));

		// zone logic
		if(daysSinceInjury <= 2){
			setActiveZone(zones.red);
		}else{
			setActiveZone(zones.orange);
		}

	}, [])

	return (
		<SafeAreaView>
			{createAlert()}
			<ScrollView>
				<Text style={[uiStyle.text, {textAlign: "center", marginBottom: 5}]}>Concussion Action Plan</Text>
				<Badge color={activeZone.color}>{activeZone.name} ZONE</Badge>
				<Text style={[{textAlign: "center", padding: 10}]}>Have your child complete the following zone and stepwise program. Aim to keep activity within the rating of perceived exertion (RPE) or heart rate guide (if your child has a heart rate monitoring device).{"\n\n"} Seek urgent medical attention if your child's symptoms worsen or if other symptoms appear.</Text>
				<ExpandableTab title="Red Zone" subtitle="Days 1 and 2 following injury" color={activeZone == zones.red ? activeZone.color : "lightgrey"} footer="After 2 days of acute rest, you may move on to the next zone." header="RPE - Nothing at all, very very light. Heart rate < 120 bpm">
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
				<ExpandableTab title="Orange Zone" subtitle="Until cleared for light activity" color={activeZone == zones.orange ? activeZone.color : "lightgrey"} footer="See your GP to check that your child may progress to the next zone. Your child must be symptom tolerant before moving on to Step 1" header="RPE - Very light or light to moderate. Heart rate 120 - 140 bpm">
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
				<ExpandableTab title="Yellow Zone" subtitle="GRADED RETURN TO ACTIVITY" color={activeZone == zones.yellow ? activeZone.color : "lightgrey"} footer="Progress to the next step if your child is symptom free for 24 hours." header="RPE - Moderate to Hard. Heart rate 80% HRt +10% each week">
					<Text style={{fontWeight:"bold"}}>Step 1 - Light cognitive and physical activity{"\n"}</Text>
					<Text>
						{"\n\t"}- Progress toward 30 minutes of cognitive exertion.
						{"\n\t"}- Your child can perform 20 minutes of aerobic activity at 80% of their heart rate threshold (HRt), increasing by 10% each week.
						{"\n\n"}Progress to the next step if your child is symptom free for 24 hours.
					</Text>
					<Text style={{fontWeight:"bold"}}>{"\n\n"}Step 2 - Moderate cognitive and physical activity{"\n"}</Text>
					<Text>
						{"\n\t"}- Part time school with accommodations (rest breaks, minimal homework, no exams) until able to handle 60 minutes or more of cognitive exertion.
						{"\n\t"}- Specific skills and moderate aerobic activity for 20-30 minutes.
						{"\n\n"}Progress to the next step if your child is symptom free for 24 hours.
					</Text>
					<Text style={{fontWeight:"bold"}}>{"\n\n"}Step 3 - Extended activity{"\n"}</Text>
					<Text>
						{"\n\t"}- Progress towards full time school with minimal accommodations.
						{"\n\t"}- More intense aerobic and skill-based activity on a more regular basis. 
					</Text>
				</ExpandableTab>
				<ExpandableTab title="Green Zone" subtitle="RETURNING TO PRE-INJURY ACTIVITY" color={activeZone == zones.green ? activeZone.color : "lightgrey"} header="RPE - Very Hard to Maximal. Heart rate 80 - 100% HRt">
					<Text>Once your child has been cleared to commence a return to activity protocol, they are ready to progress as follows:{"\n"}</Text>
						<Text style={{fontWeight:"bold"}}>{"\n\n"}Step 4 - Pre-injury activity (without contact){"\n"}</Text>
						<Text>
							{"\n\t"}- Full time school with minimal accommodations progressing when able to handle all classroom activities.
							{"\n\t"}-  Attend sport practice, however with no contact or collision activities.
						</Text>
						<Text style={{fontWeight:"bold"}}>{"\n\n"}Step 5 - Reconditioning (without contact){"\n"}</Text>
						<Text>
							{"\n\t"}- Full school.
							{"\n\t"}- Progressively return to non-contact sports over the next few weeks (e.g. 10 minutes half game full game).
							{"\n\t"}- Prepare for return to play with extra aerobic and (if relevant) resistance training. Your child must have 14 days symptom free before returning to contact sport.
						</Text>
						<Text>Your child must be symptom free for 14 days before moving on to Step 6. If clearance is needed for your child's school or sporting club, see your GP to obtain the sign off below.</Text>
						<Text style={{fontWeight:"bold"}}>{"\n\n"}Step 6 - Full activity (with contact){"\n"}</Text>
						<Text>
							{"\n\t"}- Once your child has been symptom free for 14 days, return to all activities without restriction, including contact and collision sports.
						</Text>
				</ExpandableTab>
				<View style={uiStyle.container}>
					<TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate("HEAD BUMPS")}>
						<Text style={uiStyle.buttonLabel}>Check Symptoms</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: "white",
	},

	letter: {
		fontSize: 20,
		fontWeight: "bold" 
	},

	bottomButton: {
		marginLeft: 5,
		width: 300,
		height: 50,
		padding: 10,
		marginVertical: 10,
		borderRadius: 100,
		backgroundColor: '#ff0000',
		alignItems: 'center',
		justifyContent: 'center',
	  },
});

export default ActionPlanScreen;