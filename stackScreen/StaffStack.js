import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import AddStaff from '../screen/StaffSrc/AddStaff'
import Staff from '../screen/StaffSrc/Staff'
import StaffList from '../screen/StaffSrc/StaffList'

const StaffStack = createStackNavigator()

function StaffStackScreen() {
    return(
      <StaffStack.Navigator>
        <StaffStack.Screen 
            name="Staff" 
            component={Staff} 
            options={{title: 'Nhân sự', 
                      headerTitleStyle: {alignSelf:'center'}, 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/>
        <StaffStack.Screen 
            name="Add Staff" 
            component={AddStaff} 
            options={{title: 'Thêm nhân sự', 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/>
        <StaffStack.Screen 
            name="Staff List" 
            component={StaffList} 
            options={{title: 'Danh sách nhân sự', 
                      headerTintColor: '#fff', 
                      headerStyle: {backgroundColor: '#de5543'}}}/>
      </StaffStack.Navigator>
    )
}

export default StaffStackScreen