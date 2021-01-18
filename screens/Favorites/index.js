import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MealsList, CustomHeaderButton, Screen, DefaultText } from '../../components';

const Favorites = ({ navigation }) => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    if (favoriteMeals && favoriteMeals.length) {
        return <MealsList mealData={favoriteMeals} navigation={navigation} />;
    }

    return (
        <Screen paddingHorizontal="40px">
            <DefaultText align="center">
                No favorite meals found. Use the meals navigator to add some!
            </DefaultText>
        </Screen>
    );
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
