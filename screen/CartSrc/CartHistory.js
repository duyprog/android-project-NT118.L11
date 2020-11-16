import React, { Component } from 'react'
import {Text, View, StyleSheet, FlatList, Animated, TouchableOpacity, Image } from 'react-native'
import Swipable from 'react-native-gesture-handler/Swipeable'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Table from '../../image/cart/table-cart.png'

const CartHis = [
    {
        id: 1,
        numberTable: 'Bàn 01',
        time: '10:45 AM',
        code: '0001'
    },
    {
        id: 2,
        numberTable: 'Bàn 06',
        time: '10:53 AM',
        code: '0002'
    },
    {
        id: 3,
        numberTable: 'Bàn 18',
        time: '11:09 AM',
        code: '0003'
    },
    {
        id: 4,
        numberTable: 'Bàn 03',
        time: '11:21 AM',
        code: '0004'
    }
]

function CartH ({item}) {
    const navigation = useNavigation()
    return(
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => { navigation.navigate('Cart Detail') }}>
            <View style={styles.view}>
                <Image  source={Table}
                        style={styles.imageStyle} />
                <View style={{justifyContent: 'center', marginLeft: 20}}>
                    <Text style={styles.textTable}> {item.numberTable} </Text>
                    <Text style={styles.textTime}> {item.time} </Text>
                    <Text> Mã đơn hàng: {item.code} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

function CartHistory() {
    const RightActions = (progress, dragX) => {
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
                  fontWeight: '600'
                }}>
                <Icon name="delete" size={40} color={'#fff'} />
              </Animated.Text>
            </View>
           
          </>
        )
       }
    return(
        <FlatList
            data={CartHis}
            renderItem={({item}) =>
                <View>
                    <Swipable
                        renderRightActions={RightActions}
                        >
                        <CartH item={item}></CartH>
                    </Swipable>
                </View>}
            keyExtractor={(item) => `${item.id}`} >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 78,
        height: 78,
        marginLeft: 10
    },
    view: {
        flexDirection: 'row',
        padding: 6,
        backgroundColor: '#FFF',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        marginTop: 5,
        elevation: 5,
        borderRadius: 6
    },
    textTable: {
        fontWeight: '700',
        fontSize: 18,
        textTransform: 'uppercase',
        marginLeft: 12
    },
    textTime: {
        fontSize: 15,
        marginLeft: 12
    }
})

export default CartHistory