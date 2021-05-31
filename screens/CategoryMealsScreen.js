import React, { useState } from 'react';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/data';

const CategoryMealsScreen = ({ navigation }) => {
	const catId = navigation.getParam('categoryId');

	console.log(catId);
	// const selectCategory = CATEGORIES.find((cat) => cat.id === catId);
	const displayedMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);
	console.log('displayedMeals ', displayedMeals);
	return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = (navData) => {
	const catId = navData.navigation.getParam('categoryId');
	const selectCategory = CATEGORIES.find((cat) => cat.id === catId);
	return {
		headerTitle: selectCategory.title,
	};
};

export default CategoryMealsScreen;
