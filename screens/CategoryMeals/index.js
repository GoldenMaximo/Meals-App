import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { DefaultText, MealsList, Screen } from '../../components';

import { CATEGORIES } from '../../data/dummy-data';

const CategoryMeals = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');

    const avaliableMeals = useSelector(state => state.meals.filteredMeals);

    const categoryMeals = avaliableMeals.filter(e => e.categoryIds.includes(catId));

    if (!categoryMeals.length) {
        return (
            <Screen>
                <DefaultText>No meals found, maybe check your filters?</DefaultText>
            </Screen>
        );
    }

    return <MealsList mealData={categoryMeals} navigation={navigation} />;
};

CategoryMeals.navigationOptions = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find(e => e.id === catId);

    return {
        headerTitle: selectedCat.title,
    };
};

CategoryMeals.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        pop: PropTypes.func.isRequired,
        getParam: PropTypes.func.isRequired,
    }),
};

export default CategoryMeals;
