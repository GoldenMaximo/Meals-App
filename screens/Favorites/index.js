import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MealsList, CustomHeaderButton } from '../../components';

const Favorites = ({ navigation }) => {
    const avaliableMeals = useSelector(state => state.meals.favoriteMeals);

    return <MealsList mealData={avaliableMeals} navigation={navigation} />;
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
