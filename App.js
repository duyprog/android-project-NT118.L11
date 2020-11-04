import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './screen/Categories';
import FastFoodsDetails from './screen/FastFoodsDetails';
import DrinksDetails from './screen/DrinksDetails';
import DessertsDetails from './screen/DessertsDetails';
import React from 'react'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Category">
        <Stack.Screen name="Main Menu" component={Categories} options={{title: 'Menu', headerTitleStyle: {alignSelf:'center'}}}/>
        <Stack.Screen name="Fast Foods Details" component={FastFoodsDetails} options={{title: 'Fast Foods'}}/>
        <Stack.Screen name="Drinks Details" component={DrinksDetails} options={{title: 'Drinks'}}/>
        <Stack.Screen name="Desserts Details" component={DessertsDetails} options={{title: 'Desserts'}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

