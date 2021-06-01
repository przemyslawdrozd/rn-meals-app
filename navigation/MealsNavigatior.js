import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Colors from '../assets/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { createAppContainer } from 'react-navigation';
import { Platform, Text } from 'react-native';

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Colors.primary,
	},
	headerTitleStyle: {
		fontFamily: 'open-sans-bold',
	},
	headerBackTitleStyle: {
		fontFamily: 'open-sans',
	},
	headerTintColor: 'white',
};

const MealsNavigator = createStackNavigator(
	{
		// config how to switch between
		Categories: CategoriesScreen,
		CategoryMeals: {
			screen: CategoryMealsScreen,
			navigationOptions: {
				headerTitle: 'Meal Categories',
			},
		},
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: defaultStackNavOptions,
	}
);

const FavNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetail: MealDetailScreen,
	},
	{ defaultNavigationOptions: defaultStackNavOptions }
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
		screen: FavNavigator,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => {
				return <Ionicons name='ios-star' size={25} color={tintColor} />;
			},
		},
		tabBarColor: Colors.accentColor,
		tabBarLabel: <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>,
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
					labelStyle: {
						fontFamily: 'open-sans-bold',
					},
					activeTintColor: Colors.accentColor,
				},
		  });

const FiltersNavigator = createStackNavigator(
	{
		Filters: FiltersScreen,
	},
	{
		// navigationOptions: {
		// 	drawerLabel: 'Filters@@',
		// },
		defaultNavigationOptions: defaultStackNavOptions,
	}
);

const MainNav = createDrawerNavigator(
	{
		MealsFavs: {
			screen: MealsFavTabNavigator,
			navigationOptions: { drawerLabel: 'Meals' },
		},
		Filters: FiltersNavigator,
	},
	{
		contentOptions: {
			activeTintColor: Colors.accentColor,
			labelStyle: {
				fontFamily: 'open-sans-bold',
				fontSize: 18,
			},
		},
	}
);

export default createAppContainer(MainNav);
