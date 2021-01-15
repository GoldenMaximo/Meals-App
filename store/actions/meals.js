// Identifier
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

// Action (needs extra payload (obj with identifier and payload))
export const toggleFavorite = id => {
    // Returns an object that describes this action
    return { type: TOGGLE_FAVORITE, mealId: id };
};
