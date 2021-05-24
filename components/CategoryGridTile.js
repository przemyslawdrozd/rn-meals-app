import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Platform,
	TouchableNativeFeedback,
} from 'react-native';

const CategoryGridTile = ({ title, color, onSelect }) => {
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}

	return (
		<View style={styles.gridItem}>
			<TouchableCmp style={{ flex: 1 }} onPress={onSelect}>
				<View style={{ ...styles.containter, ...{ backgroundColor: color } }}>
					<Text style={styles.title} numberOfLines={2}>
						{title}
					</Text>
				</View>
			</TouchableCmp>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		// To fix opacity when clicked
		borderRadius: 10,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
		elevation: 5,
	},
	containter: {
		flex: 1,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.36,
		shadowOffset: { width: 0, height: 5 },
		shadowRadius: 10,
		padding: 15,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'right',
	},
});

export default CategoryGridTile;
