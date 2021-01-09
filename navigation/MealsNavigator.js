import React from 'react';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetail from '../screens/MealDetail';
import Favorites from '../screens/Favorites';

const MealsNavigator = createStackNavigator(
    {
        Categories,
        CategoryMeals,
        MealDetail,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        },
    }
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
        screen: Favorites,
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

export default createAppContainer(MealsFavoritesNavigator);
