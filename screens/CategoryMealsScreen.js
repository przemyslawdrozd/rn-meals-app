import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const FetchFonts = () => {
	Font.loadAsync({
		'open-sans': require('../assets/fonts/OpenSans-Regular.tff'),
		'open-sans-bold': require('../assets/fonts/OpenSans-Bold.tff'),
	});
};

const CategoryMealsScreen = () => {
	const [fontLoaded, setFontLaded] = useState(false);

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
		</View>
	);
};

<AppLoading
	startAsync={fetchFonts}
	onFinish={() => setFontLoaded(true)}
	onError={(err) => console.log(err)}
/>;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: center,
		alignItems: 'center',
	},
});

export default CategoryMealsScreen;
