import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Serving from '../../image/cart/serving.png'
import Served from '../../image/cart/order.png'

const Cart = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Cart List')
                    }}>
                    <View  style={styles.viewStyle}>
                        <Image source={ Serving }
                               style={styles.imageView} />
                        <Text style={styles.text}> Đang phục vụ </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Cart History')
                    }}>
                    <View  style={styles.viewStyle}>
                        <Image source={ Served }
                               style={styles.imageView} />
                        <Text style={styles.text}> Đã hoàn thành </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#FFF',
        elevation: 5,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 10,
        marginLeft: 10
    },
    imageView: {
        width: 78,
        height: 78,
        marginLeft: 10
    },
    text: {
        marginLeft: 20,
        textTransform: 'uppercase', 
        fontWeight: '700',
        alignSelf: 'center',
        fontSize: 18,
    }
})

export default Cart
