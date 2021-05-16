import React, { useState } from 'react';

import { View, StyleSheet, Button, Text } from 'react-native';

import { CATEGORIES } from '../data/data';

const CategoryMealsScreen = ({ navigation }) => {
	const catId = navigation.getParam('categoryId');
	console.log(catId);

	const selectCategory = CATEGORIES.find((cat) => cat.id === catId);

	return (
		<View style={styles.screen}>
			<Text>{selectCategory.title}</Text>
			<Button
				title='Go to Meal Details!'
				onPress={() => {
					navigation.navigate({ routeName: 'MealDetail' });
				}}
			/>
			<Button
				title='Go back!'
				onPress={() => {
					// navigation.goBack();
					navigation.pop();
				}}
			/>
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
