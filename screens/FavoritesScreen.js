import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  console.log(`favMeals length`, favMeals.length);

  if (favMeals && favMeals.length) {
    return <MealList listData={favMeals} navigation={navigation} />;
  }

  return (
    <View style={styles.content}>
      <DefaultText>No Fav meals found!. Start adding some</DefaultText>
    </View>
  );
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
