import React from 'react';
import PropTypes from 'prop-types';

import { Screen, MealItem } from '../../components';

import { CATEGORIES, MEALS } from '../../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';

const CategoryMeals = ({ navigation }) => {
    const renderMealItem = ({ item: meal }) => {
        return (
            <MealItem
                title={meal.title}
                onSelectMeal={() => {}}
                duration={meal.duration}
                complexity={meal.complexity}
                affordability={meal.affordability}
                imageUrl={meal.imageUrl}
            />
        );
    };

    const catId = navigation.getParam('categoryId');
    const categoryMeals = MEALS.filter(e => e.categoryIds.includes(catId));

    return (
        <Screen paddingHorizontal="15px">
            <FlatList
                data={categoryMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </Screen>
    );
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
        navigate: PropTypes.func,
        pop: PropTypes.func,
        getParam: PropTypes.func,
    }),
};

export default CategoryMeals;
