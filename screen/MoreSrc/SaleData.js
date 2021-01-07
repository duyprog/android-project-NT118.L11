import React, { Component } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

export default class SaleData extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}> Doanh thu trong ngày </Text>
                <View style={styles.labelView}></View>
                <Text style={styles.para}> Đã thực hiện được: </Text>
                <Text style={styles.detail}> 50 đơn hàng tại chỗ </Text>
                <Text style={styles.detail}> 50 đơn hàng mang đi </Text>
                <Text style={styles.para}> Số tiền: </Text>
                <Text style={styles.detail}> 50000000 đ tại chỗ </Text>
                <Text style={styles.detail}> 50000000 đ mang đi </Text>
                <View style={styles.labelView}></View>
                <Text style={styles.totalPrice}> Tổng cộng: 100000000 đ</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    para:{
        fontSize: 20,
        color: '#747474'
    },
    detail: {
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 5
    },
    totalPrice:{
        fontSize: 20, 
        fontWeight: '700', 
        margin: 5, 
        alignSelf: 'flex-end',
        textTransform: 'uppercase'
    },
    labelView:{
        borderBottomWidth: 1,
        borderBottomColor: "#d4d4d4",
        width: "90%",
        alignSelf: 'center',
        marginBottom: 5
    },
    label: {
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#6a6b6a',
        fontSize: 23,
        marginTop: 5,
        marginBottom: 5
    },
    container: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
        marginTop: 10,
        elevation: 8,
        width: "90%",
        alignSelf: 'center'
    },
    
})
