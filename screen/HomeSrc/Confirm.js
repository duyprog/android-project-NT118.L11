import React, { Component } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, StyleSheet , SafeAreaView, Alert } from 'react-native'
import {connect} from 'react-redux';
import {fetchDetailById} from '../../redux/actions/receiptDetailActions';
import {fetchTotalPriceById} from '../../redux/actions/receiptActions';



const createAlert = () =>
    Alert.alert(
      "Thông báo",
      "Đã tạo đơn hàng thành công!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

function List({item}) {
    return(
        <View style={{alignSelf: 'center', marginBottom: 10}}>
            <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                    <Image source={{uri: item.IMAGE_URL}}
                            style={styles.cardImg}
                            resizeMode="cover" />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}> {item.ITEM_NAME} x{item.QUANTITY} </Text>
                    <Text style={styles.cardDetails}> {item.UNITPRICE} đ</Text>
                </View>
            </View>
        </View>
    )
}

const Confirm = ({navigation, fetchDetailById, currentReceiptID, receiptDetail, fetchTotalPriceById, totalPrice}) => {
    fetchDetailById(currentReceiptID);
    fetchTotalPriceById(currentReceiptID);
    return(
        <SafeAreaView>
            {/* <View style={styles.container}>
                <Text style={styles.label}> Thông tin bàn </Text>
                <View style={styles.labelView}></View>
                <View style={styles.infoTable}>
                    <Text style={{fontSize: 18}}> Số bàn: {details.name} </Text>
                    <Text style={{fontSize: 18}}> Thời gian: {details.time} </Text>
                    <Text style={{fontSize: 18}}> Mã đơn hàng: {details.code} </Text>
                </View>
            </View> */}
            <View style={styles.container}>
                <Text style={styles.label}> Chi tiết đơn hàng </Text>
                <View style={styles.labelView}></View>
                <FlatList 
                    data={receiptDetail}
                    renderItem={({item}) => 
                        <View>
                            <List item={item} />
                        </View>}
                    keyExtractor={(item) => `${item.ITEM_ID}`}/>
                <Text style={{fontSize: 18, fontWeight: '700', margin: 5}}> Tổng cộng: {totalPrice} đ</Text>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        createAlert();
                        navigation.navigate("Home");
                    }}>
                    <View style={styles.payBtn}>
                        <Text style={styles.payText}> Xác nhận </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
    infoTable: {
        marginBottom: 5,
        marginLeft: 15
    },
    card: {
        height: 80,
        width: '90%',
        flexDirection: 'row',
        marginTop: 5
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 5,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontSize: 20,
        color: '#444'
    },
    cardDetails: {
        fontSize: 18,
        color: '#444',
        fontWeight: 'bold',
    },
    btnView: {
        alignSelf: 'center', 
        marginTop: 10,
        width: "90%"
    },
    payBtn: {
        backgroundColor: '#de5543',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        elevation: 8,
        marginTop: 5
    },
    payText: {
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 9,
        color: '#fff',
        fontSize: 17
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#000000aa"
    },
    modalView: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "white",
        alignItems: 'center',
        borderRadius: 10,
        padding: 40,
        shadowColor: "#000",
    }
})
const mapStateToProps = (state) => {
    return{
        currentReceiptID: state.receiptDetailReducer.receiptDetailData.currentReceiptID,
        receiptDetail: state.receiptDetailReducer.receiptDetailData.receiptDetail, 
        totalPrice: state.receiptReducer.receiptData.totalPrice
    }
}
export default connect(mapStateToProps,{fetchDetailById, fetchTotalPriceById}) (Confirm);
