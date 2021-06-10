import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
import { CATEGORIES } from '../data/data';

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');

  const availableMeals = useSelector((state) => {
    return state.meals.filtredMeals;
  });

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals && displayedMeals.length) {
    return <MealList listData={displayedMeals} navigation={navigation} />;
  }

  return (
    <View style={styles.content}>
      <DefaultText>No Meals found!. Start adding some</DefaultText>
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam('categoryId');
  const selectCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectCategory.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
