import React from 'react';
import { Text } from 'react-native';
import * as S from './styles';
import { Screen } from '../../components';
import PropTypes from 'prop-types';

const MealDetail = ({ navigation }) => {
    return (
        <Screen>
            <Text>The MealDetail Screen!</Text>
            <S.Button title="go back" onPress={() => navigation.popToTop()} />
        </Screen>
    );
};

MealDetail.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        popToTop: PropTypes.func,
    }),
};

export default MealDetail;
