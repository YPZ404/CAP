import * as React from 'react';
import { Pressable, StyleSheet, Text, View, LayoutAnimation } from 'react-native';
import { useState } from 'react';

const ExpandableTab = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const onPress = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		if(props.children != null){
			setIsOpen((current) => !current);
		}
	}

	return (
		<Pressable style={[styles.container, {borderColor: props.color}]} onPress={onPress}>
			<View style={styles.topRowContainer}>
				<Text style={[styles.titleText, {backgroundColor: props.color, borderColor: props.color}]}>{props.title}</Text>
				<Text style={styles.infoText}>{props.subtitle}</Text>
			</View>
			<View style={[styles.collapsableContainer, {borderColor: props.color}, !isOpen && styles.collapsableContainerClosed]}>
				<Text>{props.children}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		borderColor: "red",
		borderWidth: 3,
		borderRadius: 2,
		margin: 10,
	},

	titleText: {
		color: "white",
		fontWeight: "bold",
		borderColor: "red",
		backgroundColor: "red",
		borderWidth: 5,
		padding: 10,
		alignSelf: "stretch",
		flex: 1,
		textAlign: "center"
	},

	infoText: {
		fontSize: 12,
		padding: 10,
		flex: 4,
		textAlign: "center",
		textTransform: "uppercase"
	},

	topRowContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: 'space-between',
	},

	tabBase: {
		backgroundColor: "red",
		width: 300,
		height: 100,
	},

	collapsableContainer: {
		padding: 10,
		overflow: "hidden"
	},

	collapsableContainerClosed: {
		borderTopWidth: 0,
		padding: 0,
		height: 0,
	}
});

export default ExpandableTab;