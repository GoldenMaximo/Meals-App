import React from 'react';
import PropTypes from 'prop-types';

import { MealsList } from '../../components';

import { CATEGORIES, MEALS } from '../../data/dummy-data';

const CategoryMeals = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');
    const categoryMeals = MEALS.filter(e => e.categoryIds.includes(catId));

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
