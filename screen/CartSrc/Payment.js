import React, { Component } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet, Alert } from 'react-native'
import CartDetail from './CartDetail'
import {connect} from 'react-redux';
import {updateDoneReceipt} from '../../redux/actions/receiptActions';
const createAlert = () =>
    Alert.alert(
      "Xác nhận",
      "Thanh toán cho đơn hàng này?",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

function Payment({navigation, chooseReceipt, updateDoneReceipt}){
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
                                onPress: () =>{ 
                                navigation.navigate("Cart");
                                updateDoneReceipt(chooseReceipt);
                                },
                                style: "default" },
                              { text: "Cancel",
                            onPress: () => {console.log("Cancel Pressed")},
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
const mapStateToProps = state => {
    return { 
        chooseReceipt: state.receiptReducer.receiptData.chooseReceipt, 
    }
}
export default connect(mapStateToProps, {updateDoneReceipt}) (Payment);