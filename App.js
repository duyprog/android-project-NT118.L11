import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './screen/Categories';
import FastFoodsDetails from './screen/FastFoodsDetails';
import DrinksDetails from './screen/DrinksDetails';
import DessertsDetails from './screen/DessertsDetails';
import HotPotDetails from './screen/HotPotDetails'
import FriedDetails from './screen/FriedDetails'
import React from 'react'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Category">
        <Stack.Screen name="Main Menu" component={Categories} options={{title: 'Menu', headerTitleStyle: {alignSelf:'center'}}}/>
        <Stack.Screen name="Fast Foods Details" component={FastFoodsDetails} options={{title: 'Thức ăn nhanh'}}/>
        <Stack.Screen name="Hot Pot Details" component={HotPotDetails} options={{title: 'Lẩu'}}/>
        <Stack.Screen name="Fried Details" component={FriedDetails} options={{title: 'Món chiên'}}/> 
        <Stack.Screen name="Drinks Details" component={DrinksDetails} options={{title: 'Thức uống'}}/>
        <Stack.Screen name="Desserts Details" component={DessertsDetails} options={{title: 'Tráng miệng'}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

