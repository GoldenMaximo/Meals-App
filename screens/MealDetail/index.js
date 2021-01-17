import React, { useCallback, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/actions/meals';
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
    const selectedMealIsFavorite = useSelector(state =>
        state.meals.favoriteMeals.some(e => e.id === selectedMeal.id)
    );

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(selectedMeal.id));
    }, [dispatch, selectedMeal.id]);

    useEffect(() => {
        navigation.setParams({
            toggleFav: toggleFavoriteHandler,
        });
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        navigation.setParams({
            isFavorite: selectedMealIsFavorite,
        });
    }, [selectedMealIsFavorite]);

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

const headerRightStarComponent = (toggleFavHandler, isFavorite) => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
            title="Favorite"
            iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
            onPress={toggleFavHandler}
        />
    </HeaderButtons>
);

MealDetail.navigationOptions = ({ navigation }) => {
    const meal = navigation.getParam('meal');
    const toggleFavHandler = navigation.getParam('toggleFav');
    const isFavorite = navigation.getParam('isFavorite');

    return {
        headerTitle: meal.title,
        headerRight: () => headerRightStarComponent(toggleFavHandler, isFavorite),
    };
};

MealDetail.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        popToTop: PropTypes.func.isRequired,
        setParams: PropTypes.func.isRequired,
        getParam: PropTypes.func.isRequired,
    }),
};

ListItem.propTypes = {
    children: PropTypes.string.isRequired,
};

export default MealDetail;
