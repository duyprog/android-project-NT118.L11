import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

//Các màn hình render
import Categories from './screen/Categories';
import FastFoodsDetails from './screen/FastFoodsDetails';
import DrinksDetails from './screen/DrinksDetails';
import DessertsDetails from './screen/DessertsDetails';
import HotPotDetails from './screen/HotPotDetails'
import FriedDetails from './screen/FriedDetails'
import MainMenu from './screen/MainMenu'
import Cart from './screen/Cart'
import More from './screen/More'
import AddStaff from './screen/AddStaff'
import Staff from './screen/Staff'

const Stack = createStackNavigator() //điều hướng 

export default function App() {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Main menu">
            <Stack.Screen name="Main Menu" component={MainMenu} options={{title: 'Home', headerTitleStyle: {alignSelf:'center'}}}/>
            <Stack.Screen name="Food Menu" component={Categories} options={{title: 'Menu'}}/>
            <Stack.Screen name="Fast Foods Details" component={FastFoodsDetails} options={{title: 'Thức ăn nhanh'}}/>
            <Stack.Screen name="Hot Pot Details" component={HotPotDetails} options={{title: 'Lẩu'}}/>
            <Stack.Screen name="Fried Details" component={FriedDetails} options={{title: 'Món chiên'}}/> 
            <Stack.Screen name="Drinks Details" component={DrinksDetails} options={{title: 'Thức uống'}}/>
            <Stack.Screen name="Desserts Details" component={DessertsDetails} options={{title: 'Tráng miệng'}}/>
            <Stack.Screen name="Staff" component={Staff} options={{title: 'Nhân sự'}}/>
            <Stack.Screen name="Add Staff" component={AddStaff} options={{title: 'Thêm nhân viên'}}/>
          </Stack.Navigator>
      </NavigationContainer>
  )
}


