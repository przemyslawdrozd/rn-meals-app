import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';

const MealList = ({ listData, navigation }) => {
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

	return (
		<View style={styles.list}>
			<FlatList
				style={{ width: '100%' }}
				data={listData}
				keyExtractor={(item, i) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default MealList;
