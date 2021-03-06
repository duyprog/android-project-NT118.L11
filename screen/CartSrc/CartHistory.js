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
                        <CartL item={item} nav={'CartDetail'} ></CartL>
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

export default connect(mapStateToProps, {fetchInCompleteReceipt}) (CartHistory);