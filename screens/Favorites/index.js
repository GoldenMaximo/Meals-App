import React from 'react';
import PropTypes from 'prop-types';

import { MealsList } from '../../components';

import { MEALS } from '../../data/dummy-data';

const Favorites = ({ navigation }) => {
    const favMeals = MEALS.filter(e => e.id === 'm1' || e.id === 'm2');

    return <MealsList mealData={favMeals} navigation={navigation} />;
};

Favorites.navigationOptions = () => {
    return {
        headerTitle: 'Your favorites',
    };
};

Favorites.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        pop: PropTypes.func.isRequired,
        getParam: PropTypes.func.isRequired,
    }),
};

export default Favorites;
