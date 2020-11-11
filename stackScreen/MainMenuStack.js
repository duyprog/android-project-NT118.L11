import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import Categories from '../screen/HomeSrc/Categories';
import FastFoodsDetails from '../screen/HomeSrc/FastFoodsDetails';
import DrinksDetails from '../screen/HomeSrc/DrinksDetails';
import DessertsDetails from '../screen/HomeSrc/DessertsDetails';
import HotPotDetails from '../screen/HomeSrc/HotPotDetails'
import FriedDetails from '../screen/HomeSrc/FriedDetails'
import MainMenu from '../screen/MainMenu'

const MainMenuStack = createStackNavigator()

function MainMenuStackScreen() {
    return(
      <MainMenuStack.Navigator>
        <MainMenuStack.Screen 
            name="Home" 
            component={MainMenu} 
            options={{title: 'Nhà hàng', 
                      headerTitleStyle: {alignSelf:'center'}, 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/>
        <MainMenuStack.Screen 
            name="Food Menu" 
            component={Categories} 
            options={{title: 'Thực đơn', 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/>
        <MainMenuStack.Screen 
            name="Fast Foods Details" 
            component={FastFoodsDetails} 
            options={{title: 'Thức ăn nhanh', 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/>
        <MainMenuStack.Screen 
            name="Hot Pot Details" 
            component={HotPotDetails} 
            options={{title: 'Lẩu', 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/>
        <MainMenuStack.Screen 
            name="Fried Details" 
            component={FriedDetails} 
            options={{title: 'Món chiên', 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/> 
        <MainMenuStack.Screen 
            name="Drinks Details" 
            component={DrinksDetails} 
            options={{title: 'Thức uống', 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/>
        <MainMenuStack.Screen 
            name="Desserts Details" 
            component={DessertsDetails} 
            options={{title: 'Tráng miệng', 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/>
      </MainMenuStack.Navigator>
    )
}

export default MainMenuStackScreen