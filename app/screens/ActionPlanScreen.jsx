import * as React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
  } from 'react-native';

import uiStyle from '../components/uiStyle';

function ActionPlanScreen({ navigation }) {
	return (
		<SafeAreaView>
			<Text style={uiStyle.text}>
				Action Plan.... yeah not much happening here aye.
			</Text>
		</SafeAreaView>
	)
};

export default ActionPlanScreen;