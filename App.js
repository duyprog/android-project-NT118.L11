import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'

//import Stack Screen
import MainMenuStackScreen from './stackScreen/MainMenuStack'
import StaffStackScreen from './stackScreen/StaffStack'
import CartStackScreen from './stackScreen/CartStack'
import MoreStackScreen from './stackScreen/MoreStack'

const Tab = createMaterialBottomTabNavigator()

export default function App() {
    return (
      <NavigationContainer>
          <Tab.Navigator  
              initialRouteName="Home"
              activeColor= "#FFF"
              barStyle={{ backgroundColor: '#de5543' }}>
            <Tab.Screen 
                name="Home" 
                component={MainMenuStackScreen} 
                options={{tabBarLabel: 'Home',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons 
                        name="home-outline" 
                        color={color} 
                        size={26} />
                  )}} />
            <Tab.Screen 
                name="Cart" 
                component={CartStackScreen} 
                options={{tabBarLabel: 'Đơn hàng',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons 
                        name="cart-outline" 
                        color={color} 
                        size={26} />
                  )}} />
            <Tab.Screen 
                name="Staff" 
                component={StaffStackScreen} 
                options={{tabBarLabel: 'Nhân sự',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons 
                        name="account-outline" 
                        color={color} 
                        size={26} />
                  )}} />
            <Tab.Screen 
                name="More" 
                component={MoreStackScreen} 
                options={{tabBarLabel: 'Mở rộng',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons 
                        name="layers-outline" 
                        color={color} 
                        size={26} />
                  )}} />
          </Tab.Navigator>
      </NavigationContainer>
  )
}


