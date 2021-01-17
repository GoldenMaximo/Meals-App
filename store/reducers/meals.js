import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initalState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer = (state = initalState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            if (state.favoriteMeals.find(e => e.id === action.mealId)) {
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.filter(e => e.id !== action.mealId),
                };
            } else {
                const meal = state.meals.find(e => e.id === action.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
            }
        default:
            // The default state is reached when the app is initialized
            return state;
    }
};

export default mealsReducer;
