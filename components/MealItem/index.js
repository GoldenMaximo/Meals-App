import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { DefaultText } from '../DefaultText';
import * as S from './styles';

export const MealItem = ({
    title,
    duration,
    complexity,
    affordability,
    imageUrl,
    onSelectMeal,
}) => {
    return (
        <S.Container>
            <TouchableOpacity onPress={onSelectMeal}>
                <S.MealHeader>
                    <S.MealBackgroundImg source={{ uri: imageUrl }}>
                        <S.MealTitleContainer>
                            <S.MealTitle numberOfLines={1}>{title}</S.MealTitle>
                        </S.MealTitleContainer>
                    </S.MealBackgroundImg>
                </S.MealHeader>
                <S.MealDetail>
                    <DefaultText>{duration}</DefaultText>
                    <DefaultText>{complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{affordability.toUpperCase()}</DefaultText>
                </S.MealDetail>
            </TouchableOpacity>
        </S.Container>
    );
};

MealItem.propTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    complexity: PropTypes.string.isRequired,
    affordability: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onSelectMeal: PropTypes.func.isRequired,
};
