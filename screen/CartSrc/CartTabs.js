import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import Tab1 from './CartList'
import Tab2 from './CartHistory'

const TopTab = createMaterialTopTabNavigator;

function CartTabs() {
    return(
        <TopTab.Navigator>
            <TopTab.Screen name='tab1' component={Tab1} />
            <TopTab.Screen name='tab2' component={Tab2} />
        </TopTab.Navigator>
    )
}

export default CartTabs