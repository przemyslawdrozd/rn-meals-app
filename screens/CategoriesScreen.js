import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
	// console.log('navigation ', JSON.stringify(navigation));
	return (
		<View style={styles.screen}>
			<Text>CreateCategories</Text>
			<Button
				title='Go to Meals!'
				onPress={() => {
					navigation.navigate({ routeName: 'CategoryMeals' });
					// navigation.push('CategoryMeals');
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoriesScreen;
