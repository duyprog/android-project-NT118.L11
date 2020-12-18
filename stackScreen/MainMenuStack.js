import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import Categories from '../screen/HomeSrc/Categories';
import FastFoodsDetails from '../screen/HomeSrc/FastFoodsDetails';
import DrinksDetails from '../screen/HomeSrc/DrinksDetails';
import DessertsDetails from '../screen/HomeSrc/DessertsDetails';
import HotPotDetails from '../screen/HomeSrc/HotPotDetails'
import FriedDetails from '../screen/HomeSrc/FriedDetails'
import MainMenu from '../screen/MainMenu'
import SelectTable from '../screen/HomeSrc/SelectTable'
import NoodlesDetails from '../screen/HomeSrc/NoodlesDetails'

const MainMenuStack = createStackNavigator()

function MainMenuStackScreen() {
    return(
      <MainMenuStack.Navigator>
        <MainMenuStack.Screen 
            name="Home" 
            component={MainMenu} 
            options={{title: 'Nhà hàng', 
                      headerTitleStyle: {alignSelf: 'center'},
                      headerStyle: {backgroundColor: "#de5543"},
                      headerTintColor: '#fff'
                    }}/>
        <MainMenuStack.Screen 
            name="Select table" 
            component={SelectTable} 
            options={{title: 'Tại chỗ',
                      headerStyle: {backgroundColor: "#de5543"},
                      headerTintColor: '#fff'
                    }}/>
        <MainMenuStack.Screen 
            name="Food Menu" 
            component={Categories} 
            options={{title: 'Thực đơn',
                      headerStyle: {backgroundColor: "#de5543"},
                      headerTintColor: '#fff'
                    }}/>
        <MainMenuStack.Screen 
            name="Fast Foods Details" 
            component={FastFoodsDetails} 
            options={{title: 'Thức ăn nhanh',
                      headerStyle: {backgroundColor: "#de5543"},
                      headerTintColor: '#fff'                   
                    }}/>
        <MainMenuStack.Screen 
            name="Hot Pot Details" 
            component={HotPotDetails} 
            options={{title: 'Lẩu',
                      headerStyle: {backgroundColor: "#de5543"},
                      headerTintColor: '#fff'                   
                    }}/>
        <MainMenuStack.Screen 
            name="Fried Details" 
            component={FriedDetails} 
            options={{title: 'Món chiên xào',
                      headerStyle: {backgroundColor: "#de5543"},
                      headerTintColor: '#fff'                   
                    }}/>
        <MainMenuStack.Screen 
            name="Noodles Details" 
            component={NoodlesDetails} 
            options={{title: 'Món nước',
                      headerStyle: {backgroundColor: "#de5543"},
                      headerTintColor: '#fff'                   
                    }}/> 
        <MainMenuStack.Screen 
            name="Drinks Details" 
            component={DrinksDetails} 
            options={{title: 'Thức uống',
                      headerStyle: {backgroundColor: "#de5543"},
                      headerTintColor: '#fff'                   
                    }}/>
        <MainMenuStack.Screen 
            name="Desserts Details" 
            component={DessertsDetails} 
            options={{title: 'Tráng miệng',
                      headerStyle: {backgroundColor: "#de5543"},
                      headerTintColor: '#fff'                   
                    }}/>
      </MainMenuStack.Navigator>
    )
}

export default MainMenuStackScreen