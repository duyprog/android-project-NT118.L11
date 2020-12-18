import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import Cart from '../screen/CartSrc/Cart'
import CartList from '../screen/CartSrc/CartList'
import CartHistory from '../screen/CartSrc/CartHistory'
import CartDetail from '../screen/CartSrc/CartDetail'

const CartStack = createStackNavigator()

function CartStackScreen() {
    return(
      <CartStack.Navigator>
        <CartStack.Screen 
            name="Cart" 
            component={Cart} 
            options={{title: 'Đơn hàng', 
                      headerTitleStyle: {alignSelf:'center'},
                      headerStyle: {backgroundColor: "#de5543"},
                      headerTintColor: '#fff'                   
                    }}/>
        <CartStack.Screen 
            name="Cart List" 
            component={CartList} 
            options={{title: 'Đang phục vụ',
                      headerStyle: {backgroundColor: "#de5543"},
                      headerTintColor: '#fff'                
                    }}/>
        <CartStack.Screen 
            name="Cart History" 
            component={CartHistory} 
            options={{title: 'Đã hoàn thành',
                      headerStyle: {backgroundColor: "#de5543"},
                      headerTintColor: '#fff'
                    }}/>
        <CartStack.Screen
            name="Cart Detail"
            component={CartDetail}
            options={{title: 'Chi tiết đơn hàng',
                      headerStyle: {backgroundColor: "#de5543"},
                      headerTintColor: '#fff'                
                    }}/>
      </CartStack.Navigator>
    )
}

export default CartStackScreen