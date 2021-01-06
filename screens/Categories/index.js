import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, View } from 'react-native';

import { CATEGORIES } from '../../data/dummy-data';

import * as S from './styles';
// import { Screen } from '../../components';

const Categories = ({ navigation }) => {
    const renderGridItem = itemData => {
        return (
            <S.GridItem
                onPress={() =>
                    navigation.navigate('CategoryMeals', { categoryId: itemData.item.id })
                }
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </S.GridItem>
        );
    };

    return <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />;
};

Categories.navigationOptions = {
    headerTitle: 'Meal Categories',
};

Categories.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

export default Categories;
