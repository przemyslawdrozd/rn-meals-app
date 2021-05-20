import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { MEALS } from '../data/data';

const MealDetailScreen = ({ navigation }) => {
	const mealId = navigation.getParam('mealId');
	console.log('mealId ', mealId);

	const selectedMeal = MEALS.find((meal) => mealId === meal.id);

	return (
		<View style={styles.screen}>
			<Text>{selectedMeal.title}</Text>
			<Button
				title='Go back to categories!'
				onPress={() => {
					navigation.popToTop();
				}}
			/>
		</View>
	);
};

MealDetailScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam('mealId');

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return {
		headerTitle: selectedMeal.title,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default MealDetailScreen;
