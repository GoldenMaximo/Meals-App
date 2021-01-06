import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import * as S from './styles';
import { Screen } from '../../components';

const CategoryMeals = ({ navigation }) => {
    return (
        <Screen>
            <Text>The CategoryMeal Screen!</Text>
            <S.Button title="go to details" onPress={() => navigation.navigate('MealDetail')} />
        </Screen>
    );
};

CategoryMeals.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        pop: PropTypes.func,
    }),
};

export default CategoryMeals;
