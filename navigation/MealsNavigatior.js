import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import Colors from '../assets/Colors';

import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { createAppContainer } from 'react-navigation';

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

const MealsFavTabNavigator = createBottomTabNavigator({
	Meals: MealsNavigator,
	Favorites: FavoritesScreen,
});

export default createAppContainer(MealsFavTabNavigator);
