import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../../data/dummy-data';
import { CategoryGridTile, CustomHeaderButton } from '../../components';

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

Categories.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
            </HeaderButtons>
        ),
    };
};

Categories.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default Categories;
