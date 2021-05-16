import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
	Font.loadAsync({
		'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
	});
};

const CategoryMealsScreen = ({ navigation }) => {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	return (
		<View style={styles.screen}>
			<Text>CategoryMealsScreen</Text>
			<Button
				title='Go to Meal Details!'
				onPress={() => {
					navigation.navigate({ routeName: 'MealDetail' });
				}}
			/>
			<Button
				title='Go back!'
				onPress={() => {
					// navigation.goBack();
					navigation.pop();
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

export default CategoryMealsScreen;
