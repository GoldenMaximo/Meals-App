import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetail from '../screens/MealDetail';

const MealsNavigator = createStackNavigator({
    Categories,
    CategoryMeals,
    MealDetail,
});

export default createAppContainer(MealsNavigator);
