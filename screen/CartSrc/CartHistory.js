import React, { Component } from 'react'
import {Text, View, StyleSheet, FlatList, Animated, TouchableOpacity, Image } from 'react-native'
import Swipable from 'react-native-gesture-handler/Swipeable'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {fetchInCompleteReceipt} from '../../redux/actions/receiptActions';
import PropTypes from 'prop-types'
import Table from '../../image/cart/table-cart.png'
import CartL from '../../components/CartL';


// function CartH ({item}) {
//     const navigation = useNavigation()
//     return(
//         <TouchableOpacity
//             activeOpacity={0.5}
//             onPress={() => { navigation.navigate('Cart Detail') }}>
//             <View style={styles.view}>
//                 <Image  source={Table}
//                         style={styles.imageStyle} />
//                 <View style={{justifyContent: 'center', marginLeft: 20}}>
//                     <Text style={styles.textTable}>Số bàn: {item.TBID} </Text>
//                     <Text style={styles.textTime}>Ngày tạo: {item.createTime} </Text>
//                     <Text> Mã đơn hàng: {item.RECEIPT_ID} </Text>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     )
// }

class CartHistory extends Component {
    componentDidMount(){
        this.props.fetchInCompleteReceipt();
    }
  render()
    {
        return(
            <FlatList
                data={this.props.incompleteReceipt}
                renderItem={({item}) =>
                    <View>                  
                        <CartL item={item} nav={'Cart Detail'} ></CartL>
                    </View>}
                keyExtractor={(item) => `${item.RECEIPT_ID}`} >
            </FlatList>
        )
    }
}

CartHistory.propsTypes = {
    fetchInCompleteReceipt: PropTypes.func.isRequired,
    incompleteReceipt: PropTypes.array.isRequired
}

const mapStateToProps = state =>{
    return{
        incompleteReceipt: state.receiptReducer.receiptData.incompleteReceipt
    }
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

export default connect(mapStateToProps, {fetchInCompleteReceipt}) (CartHistory);