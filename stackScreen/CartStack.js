import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import Cart from '../screen/CartSrc/Cart'
import CartList from '../screen/CartSrc/CartList'
import CartHistory from '../screen/CartSrc/CartHistory'
import CartDetail from '../screen/CartSrc/CartDetail'
import Payment from '../screen/CartSrc/Payment'
import TakeAway from '../screen/CartSrc/TakeAway'

const CartStack = createStackNavigator()

function CartStackScreen() {
    return(
      <CartStack.Navigator>
        <CartStack.Screen 
            name="Cart" 
            component={Cart} 
            options={{title: 'Đơn hàng', 
                      headerTitleStyle: {alignSelf:'center'}                  
                    }}/>
        <CartStack.Screen 
            name="Cart List" 
            component={CartList} 
            options={{title: 'Đang phục vụ'                
                    }}/>
        <CartStack.Screen 
            name="Cart History" 
            component={CartHistory} 
            options={{title: 'Đã hoàn thành'
                    }}/>
        <CartStack.Screen
            name="Payment"
            component={Payment}
            options={{title: 'Chi tiết đơn hàng'                
                    }}/>
        <CartStack.Screen
            name="CartDetail"
            component={CartDetail}
            options={{title: 'Chi tiết đơn hàng'                
                    }}/>
        <CartStack.Screen
            name="Take Away"
            component={TakeAway}
            options={{title: 'Đơn hàng mang đi'                
                    }}/>
      </CartStack.Navigator>
    )
}

export default CartStackScreen