import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import Colors from '../assets/Colors';
import { CATEGORIES } from '../data/data';

const CategoriesScreen = ({ navigation }) => {
	const renderGridItem = (itemData) => {
		return (
			<TouchableOpacity
				style={styles.gridItem}
				onPress={() =>
					navigation.navigate({
						routeName: 'CategoryMeals',
						params: {
							categoryId: itemData.item.id,
						},
					})
				}
			>
				<View>
					<Text>{itemData.item.title}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	// console.log('navigation ', JSON.stringify(navigation));
	return (
		<FlatList
			keyExtractor={(item, i) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
};
CategoriesScreen.navigationOptions = {
	headerTitle: 'Meal Categories',
	headerStyle: {
		backgroundColor: Colors.primary,
	},
	headerTintColor: 'white',
};
console.log('func ', CategoriesScreen.navigationOptions);

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
