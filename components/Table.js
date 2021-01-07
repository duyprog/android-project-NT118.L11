import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import {chooseATable} from '../redux/actions/tableActions'
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import empty from '../image/foodMenu/empty-table.png';
import serving from '../image/foodMenu/serving-table.png';
import {insertReceipt} from '../redux/actions/receiptActions';
import {fetchCurrentReceiptId} from '../redux/actions/receiptDetailActions'
import {changeTableToOne} from '../redux/actions/tableActions';
function Table({item, insertReceipt,fetchCurrentReceiptId, chooseATable, changeTableToOne}) {
    var ima = serving;
    const navigation = useNavigation();
    if(item.TB_STATUS){
        ima = serving;
        }
    else{
        ima = empty;
       }


    //var ima = item.TB_STATUS ? serving : empty
    return(
        <TouchableOpacity
            activeOpacity={0.5}
            disabled={item.TB_STATUS}
            onPress={ async () => {
                navigation.navigate('Food Menu');
                console.log(item.TB_ID);
                await chooseATable(item.TB_ID);

                await insertReceipt(item.TB_ID);
                await fetchCurrentReceiptId();
                await changeTableToOne(item.TB_ID)

            }}>
            <View style={styles.viewStyle}>
                <View>
                    <View style={styles.container}>
                        <Image style={styles.img} source={ima}/>
                    </View>
                    <View style={styles.info}>
                            <Text style={styles.name}>{'Bàn ' + item.TB_ID}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const mapStateToProps = (state) => {
    return{
        currentReceiptID: state.receiptDetailReducer.receiptDetailData.currentReceiptID,
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 8,
        marginBottom: 10
    },
    viewStyle: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 10
    },
    container: {
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    img:{
        height: 90,
        width: 90,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        marginTop: 10
    },
    info:{
        alignItems: 'center'
    },
    name: {
        fontSize: 18,
        marginBottom: 8,
        fontWeight: '600'
    }
})
export default connect(mapStateToProps, {chooseATable, insertReceipt, fetchCurrentReceiptId, changeTableToOne}) (Table);