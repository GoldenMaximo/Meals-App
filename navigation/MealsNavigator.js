import React from 'react';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetail from '../screens/MealDetail';
import Favorites from '../screens/Favorites';
import Filters from '../screens/Filters';

const defaultStackConfig = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
};

const MealsNavigator = createStackNavigator(
    {
        Categories,
        CategoryMeals,
        MealDetail,
    },
    defaultStackConfig
);

const FavoritesNavigator = createStackNavigator(
    {
        Favorites,
        MealDetail,
    },
    defaultStackConfig
);

const FiltersNavigator = createStackNavigator(
    {
        Filters,
    },
    defaultStackConfig
);

const restaurantIcon = tabInfo => (
    <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
);

const starIcon = tabInfo => <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: restaurantIcon,
            tabBarColor: Colors.primaryColor,
        },
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: starIcon,
            tabBarColor: Colors.accentColor,
        },
    },
};

const MealsFavoritesNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
              activeColor: 'white',
              shifting: true,
              barStyle: {
                  backgroundColor: Colors.primaryColor,
              },
          })
        : createBottomTabNavigator(tabScreenConfig, {
              tabBarOptions: {
                  activeTintColor: Colors.accentColor,
              },
          });

// Drawer Navigator
const MainNavigator = createDrawerNavigator(
    {
        Meals: MealsFavoritesNavigator,
        Filters: FiltersNavigator,
        // Long way of doing the same thing as above
        // MealsFavoritesNavigator: {
        //     screen: MealsFavoritesNavigator,
        //     navigationOptions: {
        //         drawerLabel: 'Meals',
        //     },
        // },
        // FiltersNavigator: {
        //     screen: FiltersNavigator,
        //     navigationOptions: {
        //         drawerLabel: 'Filters',
        //     },
        // },
    },
    {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold',
            },
        },
    }
);

export default createAppContainer(MainNavigator);
