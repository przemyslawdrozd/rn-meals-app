import { MEALS } from '../../data/data';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals';

const initState = {
  meals: MEALS,
  filtredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {
          ...state,
          favoriteMeals: updatedFavMeals,
        };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal),
        };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filtredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && meal.isGluten) return false;
        if (appliedFilters.lactoseFree && meal.isLactoseFree) return false;
        if (appliedFilters.vegetarian && meal.isVegatarian) return false;
        if (appliedFilters.vegan && meal.isVegan) return false;
        return true;
      });
      console.log('filtred ', filtredMeals);
      return {
        ...state,
        filtredMeals,
      };

    default:
      return state;
  }
};

export default mealsReducer;
