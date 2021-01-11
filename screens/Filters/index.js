import React, { useState } from 'react';
import { Switch, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CustomHeaderButton, DefaultText } from '../../components';
import Colors from '../../constants/Colors';
import * as S from './styles';

const FilterSwitch = ({ label, value, onChange }) => {
    return (
        <S.FilterContainer>
            <DefaultText>{label}</DefaultText>
            <Switch
                trackColor={{
                    true: Colors.primaryColor,
                    false: '',
                }}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                value={value}
                onValueChange={onChange}
            />
        </S.FilterContainer>
    );
};

const Filters = () => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    return (
        <S.Screen>
            <S.Title>Available Filters / Restrictions</S.Title>
            <FilterSwitch
                label="Gluten-free"
                value={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label="Lactose-free"
                value={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan"
                value={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                label="Vegetarian"
                value={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </S.Screen>
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

FilterSwitch.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filters;
