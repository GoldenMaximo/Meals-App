import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Screen } from '../Screen';
import { MealItem } from '../MealItem';

export const MealsList = ({ navigation, mealData }) => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = ({ item: meal }) => {
        const isFavorite = favoriteMeals.some(e => e.id === meal.id);
        return (
            <MealItem
                title={meal.title}
                onSelectMeal={() => navigation.navigate('MealDetail', { meal, isFavorite })}
                duration={meal.duration}
                complexity={meal.complexity}
                affordability={meal.affordability}
                imageUrl={meal.imageUrl}
            />
        );
    };

    return (
        <Screen paddingHorizontal="15px">
            <FlatList
                data={mealData}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </Screen>
    );
};

MealsList.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        pop: PropTypes.func.isRequired,
        getParam: PropTypes.func.isRequired,
    }),
    mealData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            duration: PropTypes.number.isRequired,
            complexity: PropTypes.string.isRequired,
            affordability: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
        })
    ),
};
