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
import Confirm from "../screen/HomeSrc/Confirm"
import Info from "../screen/HomeSrc/Info"

const MainMenuStack = createStackNavigator()

function MainMenuStackScreen() {
    return(
      <MainMenuStack.Navigator>
        <MainMenuStack.Screen 
            name="Home" 
            component={MainMenu} 
            options={{title: 'Nhà hàng', 
                      headerTitleStyle: {alignSelf: 'center'}
                    }}/>
        <MainMenuStack.Screen 
            name="Select table" 
            component={SelectTable} 
            options={{title: 'Tại chỗ'
                    }}/>
        <MainMenuStack.Screen 
            name="Food Menu" 
            component={Categories} 
            options={{title: 'Thực đơn'
                    }}/>
        <MainMenuStack.Screen 
            name="Fast Foods Details" 
            component={FastFoodsDetails} 
            options={{title: 'Thức ăn nhanh'                   
                    }}/>
        <MainMenuStack.Screen 
            name="Hot Pot Details" 
            component={HotPotDetails} 
            options={{title: 'Lẩu'                  
                    }}/>
        <MainMenuStack.Screen 
            name="Fried Details" 
            component={FriedDetails} 
            options={{title: 'Món chiên xào'                  
                    }}/>
        <MainMenuStack.Screen 
            name="Noodles Details" 
            component={NoodlesDetails} 
            options={{title: 'Món nước'                   
                    }}/> 
        <MainMenuStack.Screen 
            name="Drinks Details" 
            component={DrinksDetails} 
            options={{title: 'Thức uống'                  
                    }}/>
        <MainMenuStack.Screen 
            name="Desserts Details" 
            component={DessertsDetails} 
            options={{title: 'Tráng miệng'                   
                    }}/>
        <MainMenuStack.Screen 
            name="Confirm" 
            component={Confirm} 
            options={{title: 'Xác nhận đơn hàng'                   
                    }}/>
        <MainMenuStack.Screen 
            name="Info" 
            component={Info} 
            options={{title: 'Lập hóa đơn'                   
                    }}/>
      </MainMenuStack.Navigator>
    )
}

export default MainMenuStackScreen