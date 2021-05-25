import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Colors from '../assets/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

const MealsNavigator = createStackNavigator(
	{
		// config how to switch between
		Categories: CategoriesScreen,
		CategoryMeals: {
			screen: CategoryMealsScreen,
			navigationOptions: {
				headerTitle: 'Meal Catecories',
			},
		},
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Colors.primary,
			},
			headerTintColor: 'white',
		},
	}
);

const tabScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => {
				return <Ionicons name='ios-restaurant' size={25} color={tintColor} />;
			},
		},
		tabBarColor: Colors.primary,
	},
	Favorites: {
		screen: FavoritesScreen,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => {
				return <Ionicons name='ios-star' size={25} color={tintColor} />;
			},
		},
		tabBarColor: Colors.accentColor,
	},
};

const MealsFavTabNavigator =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(tabScreenConfig, {
				activeColor: Colors.accentColor,
				shifting: true,
				barStyle: {
					backgroundColor: Colors.primary,
				},
		  })
		: createBottomTabNavigator(tabScreenConfig, {
				tabBarOptions: {
					activeTintColor: Colors.accentColor,
				},
		  });

export default createAppContainer(MealsFavTabNavigator);
