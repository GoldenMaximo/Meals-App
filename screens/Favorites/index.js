import React from 'react';
import PropTypes from 'prop-types';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MealsList, CustomHeaderButton } from '../../components';

import { MEALS } from '../../data/dummy-data';

const Favorites = ({ navigation }) => {
    const favMeals = MEALS.filter(e => e.id === 'm1' || e.id === 'm2');

    return <MealsList mealData={favMeals} navigation={navigation} />;
};

Favorites.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Your favorites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
            </HeaderButtons>
        ),
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
