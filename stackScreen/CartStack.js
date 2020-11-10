import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import Cart from '../screen/CartSrc/Cart'
import CartList from '../screen/CartSrc/CartList'
import CartHistory from '../screen/CartSrc/CartHistory'

const CartStack = createStackNavigator()

function CartStackScreen() {
    return(
      <CartStack.Navigator>
        <CartStack.Screen 
            name="Cart" 
            component={Cart} 
            options={{title: 'Đơn hàng', 
                      headerTitleStyle: {alignSelf:'center'}, 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/>

        <CartStack.Screen 
            name="Cart List" 
            component={CartList} 
            options={{title: 'Đang phục vụ', 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/>
        <CartStack.Screen 
            name="Cart History" 
            component={CartHistory} 
            options={{title: 'Đã hoàn thành', 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/>
      </CartStack.Navigator>
    )
}

export default CartStackScreen