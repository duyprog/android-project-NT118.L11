import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import More from '../screen/MoreSrc/More'
import UpdateInfo from '../screen/MoreSrc/UpdateInfo'

const MoreStack = createStackNavigator()

function MoreStackScreen() {
    return(
      <MoreStack.Navigator>
        <MoreStack.Screen 
            name="More" 
            component={More} 
            options={{title: 'Mở rộng', 
                      headerTitleStyle: {alignSelf:'center'}}}/>
        <MoreStack.Screen
            name="Update Info"
            component={UpdateInfo}
            options={{title: 'Cập nhật thông tin'}} />
      </MoreStack.Navigator>
    )
  }

export default MoreStackScreen