import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { CATEGORIES } from '../../data/dummy-data';
import { CategoryGridTile } from '../../components';

const Categories = ({ navigation }) => {
    const renderGridItem = itemData => (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => navigation.navigate('CategoryMeals', { categoryId: itemData.item.id })}
        />
    );

    return <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />;
};

Categories.navigationOptions = {
    headerTitle: 'Meal Categories',
};

Categories.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default Categories;
