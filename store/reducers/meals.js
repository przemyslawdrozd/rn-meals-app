import { MEALS } from '../../data/data';

const initState = {
  meals: MEALS,
  filtredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initState, action) => {
  return state;
};

export default mealsReducer;
