import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import {chooseReceiptToSee} from '../redux/actions/receiptActions'
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import Table from '../image/cart/table-cart.png'
function CartL ({item, chooseReceiptToSee, nav}) {
    const navigation = useNavigation()
    return(
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => 
            {
                 navigation.navigate(nav);
                 chooseReceiptToSee(item.RECEIPT_ID);
             }}>
            <View style={styles.view}>
                <Image  source={Table}
                        style={styles.imageStyle} />
                <View style={{justifyContent: 'center', marginLeft: 20}}>
                    <Text style={styles.textTable}>Số bàn: {item.TBID} </Text>
                    <Text style={styles.textTime}>Ngày tạo: {item.createTime} </Text>
                    <Text> Mã đơn hàng: {item.RECEIPT_ID} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

CartL.propTypes = { 
    chooseReceiptToSee: PropTypes.func.isRequired
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
export default connect(null, {chooseReceiptToSee})(CartL);