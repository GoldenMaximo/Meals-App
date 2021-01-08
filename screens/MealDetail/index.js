import React from 'react';
import { Text } from 'react-native';
import * as S from './styles';
import { Screen } from '../../components';
import PropTypes from 'prop-types';

const MealDetail = ({ navigation }) => {
    const meal = navigation.getParam('meal');

    return (
        <Screen>
            <Text>{meal.title}</Text>
            <S.Button title="go back" onPress={() => navigation.popToTop()} />
        </Screen>
    );
};

MealDetail.navigationOptions = ({ navigation }) => {
    const meal = navigation.getParam('meal');

    return {
        headerTitle: meal.title,
    };
};

MealDetail.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        popToTop: PropTypes.func.isRequired,
        getParam: PropTypes.func.isRequired,
    }),
};

export default MealDetail;
