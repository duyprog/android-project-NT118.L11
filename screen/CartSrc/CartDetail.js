import React, { Component } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, StyleSheet , SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types'; 
import {fetchDetailById} from '../../redux/actions/receiptDetailActions';
import {fetchTotalPriceById} from '../../redux/actions/receiptActions';
import {updateDoneReceipt} from '../../redux/actions/receiptActions';
import { ScrollView } from 'react-native-gesture-handler';


function CartD( {item} ) {
    return(
        <View style={{alignSelf: 'center', marginBottom: 10}}>
            <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                    <Image source={{uri: item.IMAGE_URL}}
                            style={styles.cardImg}
                            resizeMode="cover" />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}> {item.ITEM_NAME} x {item.QUANTITY} </Text>
                    <Text style={styles.cardDetails}> Đơn giá: {item.UNITPRICE} đ</Text>
                </View>
            </View>
        </View>
    )
}
class CartDetail extends Component {
    // constructor(){
    //     this.props.fetchDetailById(this.props.chooseReceipt);
    // }
    componentDidMount(){
        this.props.fetchDetailById(this.props.chooseReceipt); 
        this.props.fetchTotalPriceById(this.props.chooseReceipt);
        console.log(this.props.receiptDetail);
    }
    render()
    {
        return(
            <SafeAreaView style={{flex: 1}}>
                 {/* <View style={styles.container}>
                    <Text style={styles.label}> Thông tin bàn </Text>
                    <View style={styles.infoTable}>
                        <Text style={{fontSize: 17}}> Số bàn: {this.props.receiptDetail[0].TBID} </Text>
                        <Text style={{fontSize: 17}}> Thời gian: {this.props.receiptDetail[0].createTime} </Text>
                        <Text style={{fontSize: 17}}> Mã đơn hàng: {this.props.receiptDetail[0].RECEIPT_ID} </Text>
                    </View>
                </View>  */}
                <View style={styles.container}>
                    <Text style={styles.label}> Chi tiết đơn hàng </Text>
                    <View style={styles.labelView}></View>
                </View> 
                <FlatList 
                    data={this.props.receiptDetail}
                    renderItem={({item}) => 
                        <View>
                            <CartD item={item} />
                        </View>}
                    keyExtractor={(item) => `${item.ITEM_ID}`}
                />
                <View style={{borderTopWidth: 1, borderTopColor: '#c4c4c4', marginTop: 10}}>
                    <Text style={{fontSize: 18, fontWeight: '700', margin: 5}}> Tổng cộng: {this.props.totalPrice} đ</Text>
                </View>
            </SafeAreaView>
        )
    }
}
CartDetail.propsTypes = {
    fetchDetailById: PropTypes.func.isRequired,
    receiptDetail: PropTypes.array.isRequired, 
    chooseReceipt: PropTypes.string.isRequired,
    fetchTotalPriceById: PropTypes.func.isRequired,
    updateDoneReceipt: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return { 
        receiptDetail: state.receiptDetailReducer.receiptDetailData.receiptDetail,
        chooseReceipt: state.receiptReducer.receiptData.chooseReceipt, 
        totalPrice: state.receiptReducer.receiptData.totalPrice,
    }
}
export default connect(mapStateToProps, {fetchDetailById, fetchTotalPriceById, updateDoneReceipt}) (CartDetail);

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
    }
})

