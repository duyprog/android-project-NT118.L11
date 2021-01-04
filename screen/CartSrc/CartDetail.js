import React, { Component } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, StyleSheet , SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types'; 
import {fetchDetailById} from '../../redux/actions/receiptDetailActions';



function CartD( {item} ) {
    return(
        <View style={{alignSelf: 'center'}}>
            <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                    <Image source={{uri: item.IMAGE_URL}}
                            style={styles.cardImg}
                            resizeMode="cover" />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}> {item.ITEM_NAME} x {item.QUANTITY} </Text>
                    <Text style={styles.cardDetails}> {item.UNITPRICE} đ</Text>
                </View>
            </View>
        </View>
    )
}
class CartDetail extends Component {
    componentDidMount(){
        this.props.fetchDetailById(this.props.chooseReceipt); 
        console.log(this.props.receiptDetail);
    }
    render()
    {
        return(
            <SafeAreaView>
                 <View style={styles.container}>
                    <Text style={styles.label}> Thông tin bàn </Text>
                    <View style={styles.infoTable}>
                        <Text style={{fontSize: 17}}> Số bàn: {this.props.receiptDetail[1].TBID} </Text>
                        <Text style={{fontSize: 17}}> Thời gian: {this.props.receiptDetail[1].createTime} </Text>
                        <Text style={{fontSize: 17}}> Mã đơn hàng: {this.props.receiptDetail[1].RECEIPT_ID} </Text>
                    </View>
                </View> 
                <View style={styles.container}>
                    <Text style={styles.label}> Chi tiết đơn hàng </Text>
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
                    <Text style={{fontSize: 18, fontWeight: '700', margin: 5}}> Tổng cộng: 1.380.000đ </Text>
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        >
                        <View style={styles.payBtn}>
                            <Text style={styles.payText}> Thanh toán </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
CartDetail.propsTypes = {
    fetchDetailById: PropTypes.func.isRequired,
    receiptDetail: PropTypes.array.isRequired, 
    chooseReceipt: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return { 
        receiptDetail: state.receiptDetailReducer.receiptDetailData.receiptDetail,
        chooseReceipt: state.receiptReducer.receiptData.chooseReceipt
    }
}
export default connect(mapStateToProps, {fetchDetailById}) (CartDetail);

const styles = StyleSheet.create({
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
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        padding: 5
    },
    infoTable: {
        marginBottom: 5,
        marginLeft: 15
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
    },
    card: {
        height: 80,
        width: '90%',
        flexDirection: 'row',
        marginTop: 10
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
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontSize: 17,
        color: '#444'
    },
    cardDetails: {
        fontSize: 18,
        color: '#444',
        fontWeight: 'bold',
    },
    btnView: {
        alignItems: 'center', 
        marginTop: 5
    }
})

