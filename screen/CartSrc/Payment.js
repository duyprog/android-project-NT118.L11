import React, { Component } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet, Alert } from 'react-native'
import CartDetail from './CartDetail'

const createAlert = () =>
    Alert.alert(
      "Xác nhận",
      "Thanh toán cho đơn hàng này?",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

function Payment({navigation}){
    return(
        <SafeAreaView>
            <CartDetail></CartDetail>
            <View style={styles.btnView}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        Alert.alert(
                            "Xác nhận",
                            "Thanh toán cho đơn hàng này?",
                            [
                              { text: "OK", 
                                onPress: () => navigation.navigate("Cart"),
                                style: "default" },
                              { text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel" }
                            ],
                          );
                    }}>
                    <View style={styles.payBtn}>
                        <Text style={styles.payText}> Thanh toán </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btnView: {
        alignItems: 'center', 
        marginTop: 5
    },
    payBtn: {
        backgroundColor: '#de5543',
        borderRadius: 20,
        height: 40,
        width: 130,
        alignItems: 'center',
        elevation: 4,
        marginTop: 5
    },
    payText: {
        textTransform: 'uppercase',
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 8,
        color: '#fff',
        fontSize: 17
    }
})

export default Payment