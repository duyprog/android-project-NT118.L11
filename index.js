/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CategoryListItems from './components/CategoryListItems';
import FoodItems from './items/FoodItems'
import FastFoodsDetails from './screen/FastFoodsDetails'
AppRegistry.registerComponent(appName, () => App);
