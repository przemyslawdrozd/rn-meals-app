import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/data';

const FavoritesScreen = ({ navigation }) => {
	const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
	console.log('navigation ', navigation);
	return <MealList listData={favMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Your Favorites',
	};
};

const styles = StyleSheet.create({});

export default FavoritesScreen;
