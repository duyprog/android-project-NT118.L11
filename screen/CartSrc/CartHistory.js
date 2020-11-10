import React, { Component } from 'react'
import {View, StyleSheet, FlatList, Animated } from 'react-native'
import Swipable from 'react-native-gesture-handler/Swipeable'
import CartListComp from '../../components/CartListComp'

export default class CartList extends Component {
    constructor(props){
        super(props)
        this.state = ({
            cartList: [
                {
                    id: 1,
                    numberTable: 'Bàn 01',
                    time: '10:45 AM'
                },
                {
                    id: 2,
                    numberTable: 'Bàn 06',
                    time: '10:53 AM'
                },
                {
                    id: 3,
                    numberTable: 'Bàn 18',
                    time: '11:09 AM'
                },
                {
                    id: 4,
                    numberTable: 'Bàn 03',
                    time: '11:21 AM'
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
                  fontSize: 35,
                  color: 'white',
                  paddingHorizontal: 10,
                  fontWeight: '600',
                  transform: [{ scale }]
                }}>
                Xóa
              </Animated.Text>
            </View>
           
          </>
        )
       }

    render() {
        return (
            <FlatList
                data={this.state.cartList}
                renderItem={({item}) =>
                    <View>
                        <Swipable
                            renderRightActions={this.RightActions}
                            >
                            <CartListComp 
                                    numberTable={item.numberTable}
                                    time={item.time}/> 
                        </Swipable>
                    </View>}
                keyExtractor={(item) => `${item.id}`} >
            </FlatList>
        )
    }
}
