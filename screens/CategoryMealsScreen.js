import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/data";

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => {
    return state.meals.filtredMeals;
  });

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam("categoryId");
  const selectCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectCategory.title,
  };
};

export default CategoryMealsScreen;
