import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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

const Tab = createMaterialBottomTabNavigator()

const MainMenuStack = createStackNavigator()
const CartStack = createStackNavigator()
const MoreStack = createStackNavigator()
const StaffStack = createStackNavigator()

function MainMenuStackScreen() {
  return(
    <MainMenuStack.Navigator>
      <MainMenuStack.Screen name="Home" component={MainMenu} options={{title: 'Home', headerTitleStyle: {alignSelf:'center'}}}/>
      <MainMenuStack.Screen name="Food Menu" component={Categories} options={{title: 'Menu'}}/>
      <MainMenuStack.Screen name="Fast Foods Details" component={FastFoodsDetails} options={{title: 'Thức ăn nhanh'}}/>
      <MainMenuStack.Screen name="Hot Pot Details" component={HotPotDetails} options={{title: 'Lẩu'}}/>
      <MainMenuStack.Screen name="Fried Details" component={FriedDetails} options={{title: 'Món chiên'}}/> 
      <MainMenuStack.Screen name="Drinks Details" component={DrinksDetails} options={{title: 'Thức uống'}}/>
      <MainMenuStack.Screen name="Desserts Details" component={DessertsDetails} options={{title: 'Tráng miệng'}}/>
      <MainMenuStack.Screen name="Staff" component={Staff} options={{title: 'Nhân sự'}}/>
      <MainMenuStack.Screen name="Add Staff" component={AddStaff} options={{title: 'Thêm nhân viên'}}/>
    </MainMenuStack.Navigator>
  )
}

function CartStackScreen() {
  return(
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={Cart} options={{title: 'Đơn hàng', headerTitleStyle: {alignSelf:'center'}}}/>
    </CartStack.Navigator>
  )
}

function StaffStackScreen() {
  return(
    <StaffStack.Navigator>
      <StaffStack.Screen name="Staff" component={Cart} options={{title: 'Nhân sự', headerTitleStyle: {alignSelf:'center'}}}/>
    </StaffStack.Navigator>
  )
}

function MoreStackScreen() {
  return(
    <MoreStack.Navigator>
      <MoreStack.Screen name="More" component={More} options={{title: 'Mở rộng', headerTitleStyle: {alignSelf:'center'}}}/>
    </MoreStack.Navigator>
  )
}

export default function App() {
    return (
      <NavigationContainer>
          <Tab.Navigator initialRouteName="Home"
                         barStyle={{ backgroundColor: '#de5543' }}
                         >
            <Tab.Screen name="Home" component={MainMenuStackScreen} options={{tabBarLabel: 'Home',
                                    tabBarIcon: ({ color }) => (
                                      <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                                    )}} />
            <Tab.Screen name="Cart" component={CartStackScreen} options={{tabBarLabel: 'Đơn hàng',
                                    tabBarIcon: ({ color }) => (
                                      <MaterialCommunityIcons name="cart-outline" color={color} size={26} />
                                    )}} />
            <Tab.Screen name="Staff" component={StaffStackScreen} options={{tabBarLabel: 'Nhân sự',
                                    tabBarIcon: ({ color }) => (
                                      <MaterialCommunityIcons name="account-outline" color={color} size={26} />
                                    )}} />
            <Tab.Screen name="More" component={MoreStackScreen} options={{tabBarLabel: 'Mở rộng',
                                    tabBarIcon: ({ color }) => (
                                      <MaterialCommunityIcons name="layers-outline" color={color} size={26} />
                                    )}} />
          </Tab.Navigator>
      </NavigationContainer>
  )
}


