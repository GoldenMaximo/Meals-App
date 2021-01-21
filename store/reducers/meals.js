import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initalState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer = (state = initalState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE: {
            if (state.favoriteMeals.find(e => e.id === action.mealId)) {
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.filter(e => e.id !== action.mealId),
                };
            } else {
                const meal = state.meals.find(e => e.id === action.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
            }
        }
        case SET_FILTERS: {
            const appliedFilters = action.filters;
            const filteredMeals = state.meals.filter(meal => {
                if (appliedFilters.isGlutenFree && !meal.isGlutenFree) return false;
                if (appliedFilters.isLactoseFree && !meal.isLactoseFree) return false;
                if (appliedFilters.isVegetarian && !meal.isVegetarian) return false;
                if (appliedFilters.isVegan && !meal.isVegan) return false;
                return true;
            });
            return { ...state, filteredMeals };
        }
        default:
            // The default state is reached when the app is initialized
            return state;
    }
};

export default mealsReducer;
