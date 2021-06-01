import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/data';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = ({ navigation }) => {
	const renderGridItem = ({ item }) => {
		return (
			<CategoryGridTile
				title={item.title}
				color={item.color}
				onSelect={() =>
					navigation.navigate({
						routeName: 'CategoryMeals',
						params: {
							categoryId: item.id,
						},
					})
				}
			/>
		);
	};

	return (
		<FlatList
			keyExtractor={(item, i) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
};

CategoriesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Filter Meals',
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

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
	},
});

export default CategoriesScreen;
