import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';

import { CATEGORIES } from '../../data/dummy-data';

import * as S from './styles';
// import { Screen } from '../../components';

const renderGridItem = (itemData) => {
    return (
        <S.GridItem>
            <Text>{itemData.item.title}</Text>
        </S.GridItem>
    );
};

const Categories = () => {
    return <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />;
};

Categories.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

export default Categories;
