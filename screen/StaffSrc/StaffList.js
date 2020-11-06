import React, { Component } from 'react'
import {View, StyleSheet, FlatList, Animated } from 'react-native'
import Swipable from 'react-native-gesture-handler/Swipeable'
import StaffListComp from '../../components/StaffListComp'

export default class StaffList extends Component {
    constructor(props){
        super(props)
        this.state = ({
            staffList: [
                {
                    id: 1,
                    name: 'Hoang My Phi hehe',
                    role: 'Ong chu chu j'
                },
                {
                    id: 2,
                    name: 'Duy Pham hehe',
                    role: 'Quan ly chu j'
                },
                {
                    id: 3,
                    name: 'Chung tin',
                    role: 'Culi vnutour'
                },
                {
                    id: 4,
                    name: 'May du hai chau',
                    role: 'an chua'
                }
            ]
        })
    }

    // Right action on Swipeable
    RightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
          inputRange: [-100, 0],
          outputRange: [0.7, 0]
        })
        return (
          <>
            <View style={{ 
                backgroundColor: 'red', 
                justifyContent: 'center',
                marginBottom: 5,
                marginTop: 5,
                padding: 6,
    }}>
              <Animated.Text
                style={{
                    fontSize: 20,
                  color: 'white',
                  paddingHorizontal: 10,
                  fontWeight: '600',
                  transform: [{ scale }]
                }}>
                Delete
              </Animated.Text>
            </View>
           
          </>
        )
       }

    render() {
        return (
            <FlatList
                data={this.state.staffList}
                renderItem={({item}) =>
                    <View>
                        <Swipable
                            renderRightActions={this.RightActions}
                            >
                            <StaffListComp name={item.name} role={item.role}/> 
                        </Swipable>
                    </View>}
                keyExtractor={(item) => `${item.id}`} >
            </FlatList>
        )
    }
}
