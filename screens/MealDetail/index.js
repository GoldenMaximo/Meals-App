import React from 'react';
import { ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import PropTypes from 'prop-types';

import { CustomHeaderButton, DefaultText } from '../../components';
import * as S from './styles';

const ListItem = ({ children }) => {
    return (
        <S.ListItem>
            <DefaultText>{children}</DefaultText>
        </S.ListItem>
    );
};

const MealDetail = ({ navigation }) => {
    const selectedMeal = navigation.getParam('meal');

    return (
        <ScrollView>
            <S.Image source={{ uri: selectedMeal.imageUrl }} />
            <S.Details>
                <DefaultText>{selectedMeal.duration}</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </S.Details>
            <S.Title>List of Ingredients</S.Title>
            {selectedMeal.ingredients.map((e, i) => {
                return <ListItem key={i}>{e}</ListItem>;
            })}
            <S.Title>Steps</S.Title>
            {selectedMeal.steps.map((e, i) => {
                return <ListItem key={i}>{e}</ListItem>;
            })}
        </ScrollView>
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

ListItem.propTypes = {
    children: PropTypes.string.isRequired,
};

export default MealDetail;
