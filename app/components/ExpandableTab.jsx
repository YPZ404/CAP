import * as React from 'react';
import { Pressable, StyleSheet, Text, View, Animated } from 'react-native';
import { useState, useRef } from 'react';
import { back, ease } from 'react-native/Libraries/Animated/Easing';

const ExpandableTab = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const heightAnim = useRef(new Animated.Value(0)).current

	const onPress = () => {
		if(props.children != null){
			setIsOpen((current) => {
				if(current){
					Animated.timing(heightAnim, {
						toValue: 0,
						duration: 300,
						useNativeDriver: false,
					  }).start();	
				}else{
					Animated.timing(heightAnim, {
						toValue: 1000,
						duration: 500,
						useNativeDriver: false,
					  }).start();	
				}
				return !current;
			});
			
		}
	}
	return (
		<Pressable style={[styles.container, {borderColor: props.color}]} onPress={onPress}>
			<View style={styles.topRowContainer}>
				<Text style={[styles.titleText, {backgroundColor: props.color, borderColor: props.color}]}>{props.title}</Text>
				<Text style={styles.infoText}>{props.subtitle}</Text>
			</View>
			<Animated.View style={[styles.collapsableContainer, {borderColor: props.color}, {maxHeight: heightAnim}]}>
				<View style={styles.childrenContainer}>{props.children}</View>
				{props.footer && <Text style={[styles.footer, {backgroundColor: props.color}]}>{props.footer}</Text> }
			</Animated.View>
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
		overflow: "hidden",
	},

	footer: {
		color: "white",
		fontWeight: "bold",
		padding: 10,
		textAlign: "center",
	},

	childrenContainer: {
		padding: 10,
	}
});

export default ExpandableTab;