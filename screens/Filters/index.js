import React from 'react';
import { Text } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Screen, CustomHeaderButton } from '../../components';

const Filters = () => {
    return (
        <Screen>
            <Text>The Filters Screen!</Text>
        </Screen>
    );
};

Filters.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Filters',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
            </HeaderButtons>
        ),
    };
};

export default Filters;
