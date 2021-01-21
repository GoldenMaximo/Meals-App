// Identifier
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

// Action (needs extra payload (obj with identifier and payload))
export const toggleFavorite = id => {
    // Returns an object that describes this action
    return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilters = filterSettings => {
    return { type: SET_FILTERS, filters: filterSettings };
};
