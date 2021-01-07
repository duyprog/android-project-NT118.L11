import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import More from '../screen/MoreSrc/More'
import UpdateInfo from '../screen/MoreSrc/UpdateInfo'
import InfoApp from '../screen/MoreSrc/InfoApp'
import Sale from '../screen/MoreSrc/SaleData'

const MoreStack = createStackNavigator()

function MoreStackScreen() {
    return(
      <MoreStack.Navigator>
        <MoreStack.Screen 
            name="More" 
            component={More} 
            options={{title: 'Mở rộng', 
                      headerTitleStyle: {alignSelf:'center'}               
                    }}/>
        <MoreStack.Screen
            name="Update Info"
            component={UpdateInfo}
            options={{title: 'Cập nhật thông tin'                
                    }} />
        <MoreStack.Screen
            name="Info App"
            component={InfoApp}
            options={{title: 'Thông tin ứng dụng'                
                    }} />
        <MoreStack.Screen
            name="Sale"
            component={Sale}
            options={{title: 'Số liệu kinh doanh'                
                    }} />
      </MoreStack.Navigator>
    )
  }

export default MoreStackScreen