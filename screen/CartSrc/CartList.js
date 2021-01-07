import React, { Component } from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; 
import {fetchCompleteReceipt, chooseReceiptToSee} from '../../redux/actions/receiptActions'
import Table from '../../image/cart/table-cart.png'
import CartL from '../../components/CartL';

// const cartList = [
//     {
//         id: 1,
//         numberTable: 'Bàn 01',
//         time: '10:45 AM',
//         code: '0001'
//     },
//     {
//         id: 2,
//         numberTable: 'Bàn 06',
//         time: '10:53 AM',
//         code: '0002'
//     },
//     {
//         id: 3,
//         numberTable: 'Bàn 18',
//         time: '11:09 AM',
//         code: '0003'
//     },
//     {
//         id: 4,
//         numberTable: 'Bàn 03',
//         time: '11:21 AM',
//         code: '0004'
//     }
// ]


class CartList extends Component {
    componentDidMount(){
        this.props.fetchCompleteReceipt();
        console.log(this.props.chooseReceipt)
    }
   render()
    {return(
        <FlatList
            data={this.props.completeReceipt}
            renderItem={({item}) =>
                <View>
<<<<<<< HEAD
                     <CartL item={item} nav={'Payment'}></CartL>
=======
                     <CartL item={item} nav={'Cart Detail'}></CartL>
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
                </View>}
            keyExtractor={(item) => `${item.RECEIPT_ID}`} >
        </FlatList>
    )}
}


CartList.propsTypes = {
    fetchCompleteReceipt: PropTypes.func.isRequired, 
    completeReceipt: PropTypes.array.isRequired,
    chooseReceiptToSee: PropTypes.func.isRequired,
    chooseReceipt: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
    return {
        completeReceipt: state.receiptReducer.receiptData.completeReceipt,
        chooseReceipt: state.receiptReducer.receiptData.chooseReceipt
    }
}

export default connect(mapStateToProps, {fetchCompleteReceipt, chooseReceiptToSee})(CartList);