import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import * as S from './styles';
import { Screen } from '../../components';

const Categories = ({ navigation }) => {
    return (
        <Screen>
            <Text>The categories Screen!</Text>
            <S.Button
                title="go to Meals!"
                onPress={() => {
                    navigation.navigate('CategoryMeals');
                }}
            />
        </Screen>
    );
};

Categories.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

export default Categories;
