import React from 'react';
import { Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import PropTypes from 'prop-types';

import * as S from './styles';
import { Screen, CustomHeaderButton } from '../../components';

const MealDetail = ({ navigation }) => {
    const meal = navigation.getParam('meal');

    return (
        <Screen>
            <Text>{meal.title}</Text>
            <S.Button title="go back" onPress={() => navigation.popToTop()} />
        </Screen>
    );
};

const headerRightStarComponent = () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => console.log('heyooo')} />
    </HeaderButtons>
);

MealDetail.navigationOptions = ({ navigation }) => {
    const meal = navigation.getParam('meal');

    return {
        headerTitle: meal.title,
        headerRight: headerRightStarComponent,
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
