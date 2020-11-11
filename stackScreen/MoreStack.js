import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import More from '../screen/MoreSrc/More'

const MoreStack = createStackNavigator()

function MoreStackScreen() {
    return(
      <MoreStack.Navigator>
        <MoreStack.Screen 
            name="More" 
            component={More} 
            options={{title: 'Mở rộng', 
                      headerTitleStyle: {alignSelf:'center'}, 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/>
      </MoreStack.Navigator>
    )
  }

export default MoreStackScreen