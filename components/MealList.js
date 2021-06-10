import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealList = ({ listData, navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = ({ item }) => {
    const isMealFav = favMeals.some((meal) => meal.id === item.id);
    return (
      <MealItem
        item={item}
        onSelectMeal={() =>
          navigation.navigate({
            routeName: 'MealDetail',
            params: { mealId: item.id, mealTitle: item.title, isMealFav },
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
