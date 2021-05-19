import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
} from 'react-native';

const MealItem = ({ item, onSelectMeal }) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={onSelectMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							style={styles.bgImage}
							source={{ uri: item.imageUrl }}
						>
							<View style={styles.titleContainer}>
								<Text style={styles.title} numberOfLines={1}>
									{item.title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<Text>{item.duration}m</Text>
						<Text>{item.complexity.toUpperCase()}</Text>
						<Text>{item.affodability.toUpperCase()}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: '100%',
		backgroundColor: '#f5f5f5',
		borderRadius: 10,
		overflow: 'hidden',
	},
	mealRow: {
		flexDirection: 'row',
	},
	mealHeader: {
		height: '85%',
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '15%',
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end',
	},
	titleContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingVertical: 5,
	},
	title: {
		color: 'white',
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'center',
	},
});

export default MealItem;
