import { MEALS } from '../../data/dummy-data';

const initalState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

// eslint-disable-next-line no-unused-vars
const mealsReducer = (state = initalState, action) => {
    return state;
};

export default mealsReducer;
