import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './screen/Categories';
import FoodDetails from './screen/FoodDetails';
import DrinkDetails from './screen/DrinkDetails';
import CakeDetails from './screen/CakeDetails';
import React from 'react'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Category">
        <Stack.Screen name="Category" component={Categories} options={{title: 'Category'}}/>
        <Stack.Screen name="Food Details" component={FoodDetails} options={{title: 'Food Details'}}/>
        <Stack.Screen name="Drink Details" component={DrinkDetails} options={{title: 'Drink Details'}}/>
        <Stack.Screen name="Cake Details" component={CakeDetails} options={{title: 'Cakes'}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

