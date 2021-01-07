import React, { Component } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, StyleSheet , SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
<<<<<<< HEAD
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
=======

const order = [
    {
        id: 1,
        foodName: 'Pizza',
        price: 300000,
        image: [
            {
                url: 'https://www.thucphamsachhd.com/uploads/files/2017/10/03/Steak-meat-34450442-1302-1020.jpg'
            }
        ],
        sl: 3,
        total: 900000
    },
    {
        id: 2,
        foodName: 'Beefsteak',
        price: 240000,
        image: [
            {
                url: 'https://img-global.cpcdn.com/recipes/39ca2c2a0e1fb011/751x532cq70/mi-y-s%E1%BB%91t-bo-bam-spaghetti-bolognese-recipe-main-photo.jpg'
            }
            
        ],
        sl: 2,
        total: 480000
    }
]

const details = 
    {
        id: 1,
        name: 'Bàn 01',
        time: '10:45 AM',
        code: '0001'
    }

function CartD({ item }) {
    return(
        <View style={{alignSelf: 'center'}}>
            <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                    <Image source={{uri: item.image[0].url}}
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
                            style={styles.cardImg}
                            resizeMode="cover" />
                </View>
                <View style={styles.cardInfo}>
<<<<<<< HEAD
                    <Text style={styles.cardTitle}> {item.ITEM_NAME} x {item.QUANTITY} </Text>
                    <Text style={styles.cardDetails}> Đơn giá: {item.UNITPRICE} đ</Text>
=======
                    <Text style={styles.cardTitle}> {item.foodName} x{item.sl} </Text>
                    <Text style={styles.cardDetails}> {item.total} </Text>
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
                </View>
            </View>
        </View>
    )
}
<<<<<<< HEAD
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
            <SafeAreaView>
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
=======
function CartDetail() {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.label}> Thông tin bàn </Text>
                <View style={styles.infoTable}>
                    <Text style={{fontSize: 17}}> Số bàn: {details.name} </Text>
                    <Text style={{fontSize: 17}}> Thời gian: {details.time} </Text>
                    <Text style={{fontSize: 17}}> Mã đơn hàng: {details.code} </Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.label}> Chi tiết đơn hàng </Text>
            </View>
            <FlatList 
                data={order}
                renderItem={({item}) => 
                    <View>
                        <CartD item={item} />
                    </View>}
                keyExtractor={(item) => `${item.id}`}
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

const styles = StyleSheet.create({
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
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
<<<<<<< HEAD
        padding: 5,
        borderRadius: 10,
        marginTop: 10,
        elevation: 8,
        width: "90%",
        alignSelf: 'center'
=======
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        padding: 5
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
    },
    infoTable: {
        marginBottom: 5,
        marginLeft: 15
    },
<<<<<<< HEAD
=======
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
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
    card: {
        height: 80,
        width: '90%',
        flexDirection: 'row',
<<<<<<< HEAD
        marginTop: 5
=======
        marginTop: 10
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
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
<<<<<<< HEAD
=======
        borderColor: '#ccc',
        borderWidth: 1,
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
<<<<<<< HEAD
        fontSize: 20,
=======
        fontSize: 17,
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
        color: '#444'
    },
    cardDetails: {
        fontSize: 18,
        color: '#444',
        fontWeight: 'bold',
<<<<<<< HEAD
    }
})

=======
    },
    btnView: {
        alignItems: 'center', 
        marginTop: 5
    }
})

export default CartDetail
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
