import * as React from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';

import uiStyle from '../components/uiStyle';

function HeadBumpsScreen ({navigation}) {
	return(
		<SafeAreaView style={styles.topContainer}>
			<Text style={styles.container}>Over the next few days, symptoms may worsen or other symptoms may appear. Watch out for HEAD BUMPS (symptoms listed below). If they occur, seek urgent medical attention.</Text>
			<View style={styles.container}>
				<FlatList
					scrollEnabled={false}
					data={[
						{letter: 'H', description: 'Headache, seizure, unconscious.'},
						{letter: 'E', description: 'Eye problems (blurred/double vision).'},
						{letter: 'A', description: 'Abnormal behaviour change.'},
						{letter: 'D', description: 'Dizziness, persistent vomiting.'},
						]}
					renderItem={({item}) => <Text key={item.letter}><Text style={styles.letter}>{item.letter}</Text> - {item.description}</Text>}
					keyExtractor={(item) => item.letter}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					scrollEnabled={false}
					data={[
						{letter: 'B', description: 'Balance dysfunction with weakness or numbness in legs/arms.'},
						{letter: 'U', description: 'Unsteady on feet, slurred speech.'},
						{letter: 'M', description: 'Memory impaired, confused, disoriented.'},
						{letter: 'P', description: 'Poor concentration, drowsy, sleep.'},
						{letter: 'S', description: 'Something\'s not right (concerned about child).'},
						]}
					renderItem={({item}) => <Text key={item.letter}><Text style={styles.letter}>{item.letter}</Text> - {item.description}</Text>}
					keyExtractor={(item) => item.letter}
				/>
			</View>
			<View style={uiStyle.container}>
				<TouchableOpacity style={styles.bottomButton} onPress={() => navigation.goBack()}>
					<Text style={uiStyle.buttonLabel}>Back</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

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

export default HeadBumpsScreen;