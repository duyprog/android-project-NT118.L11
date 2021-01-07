import React, { Component } from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; 
import {fetchCompleteReceipt, chooseReceiptToSee} from '../../redux/actions/receiptActions'
import Table from '../../image/cart/table-cart.png'
import CartL from '../../components/CartL';
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
                     <CartL item={item} nav={'Payment'}></CartL>
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