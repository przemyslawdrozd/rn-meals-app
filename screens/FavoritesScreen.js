import React from 'react';
import { StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/data';

const FavoritesScreen = ({ navigation }) => {
	const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
	console.log('navigation ', navigation);
	return <MealList listData={favMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Your Favorites',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title='Menu'
					iconName='ios-menu'
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({});

export default FavoritesScreen;
