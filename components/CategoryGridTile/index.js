import React from 'react';
import { Platform } from 'react-native';
import { View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

import * as S from './styles';

export const CategoryGridTile = ({ title, color, onSelect }) => {
    let Touchable = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        Touchable = TouchableNativeFeedback;
    }
    return (
        <S.TouchableContainer>
            <Touchable onPress={onSelect} style={S.Styles.touchable}>
                <View style={{ ...S.Styles.titleContainer, ...{ backgroundColor: color } }}>
                    <S.Title numberOfLines={2}>{title}</S.Title>
                </View>
            </Touchable>
        </S.TouchableContainer>
    );
};

CategoryGridTile.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};
