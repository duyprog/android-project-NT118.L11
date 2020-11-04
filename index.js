/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CategoryListItems from './components/CategoryListItems';
import CategoryList from './components/CategoryList';
import FoodItems from './items/FoodItems'
import FoodDetails from './screen/FoodDetails'
AppRegistry.registerComponent(appName, () => App);
