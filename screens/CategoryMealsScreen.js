import React from 'react';
import { View, StyleSheet } from 'react-native';

const CategoryMealsScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>CreateCategories</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealsScreen;
