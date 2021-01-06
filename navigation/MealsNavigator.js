import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetail from '../screens/MealDetail';

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

export default createAppContainer(MealsNavigator);
