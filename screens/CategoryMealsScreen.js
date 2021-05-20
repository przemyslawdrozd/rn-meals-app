import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/data';

const CategoryMealsScreen = ({ navigation }) => {
	const renderMealItem = ({ item }) => {
		return (
			<MealItem
				item={item}
				onSelectMeal={() =>
					navigation.navigate({
						routeName: 'MealDetail',
						params: { mealId: item.id },
					})
				}
			/>
		);
	};

	const catId = navigation.getParam('categoryId');

	console.log(catId);
	// const selectCategory = CATEGORIES.find((cat) => cat.id === catId);
	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);
	console.log('displayedMeals ', displayedMeals);
	return (
		<View style={styles.screen}>
			<FlatList
				style={{ width: '100%' }}
				data={displayedMeals}
				keyExtractor={(item, i) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = (navData) => {
	const catId = navData.navigation.getParam('categoryId');
	const selectCategory = CATEGORIES.find((cat) => cat.id === catId);
	return {
		headerTitle: selectCategory.title,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealsScreen;
