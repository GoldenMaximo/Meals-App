import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import * as S from './styles';
import { Screen } from '../../components';

import { CATEGORIES } from '../../data/dummy-data';

const CategoryMeals = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');

    const selectedCat = CATEGORIES.find(e => e.id === catId);

    return (
        <Screen>
            <Text>{selectedCat.title}</Text>
            <S.Button title="go to details" onPress={() => navigation.navigate('MealDetail')} />
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
