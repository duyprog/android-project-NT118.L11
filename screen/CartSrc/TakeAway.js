import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Animated, TouchableOpacity, Image } from 'react-native'
import CartL from '../../components/CartL';
import {connect} from 'react-redux';
import {fetchInCompleteReceipt} from '../../redux/actions/receiptActions';
import PropTypes from 'prop-types'

class TakeAway extends Component {
    componentDidMount(){
        this.props.fetchInCompleteReceipt();
    }
    render() {
        return (
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

TakeAway.propsTypes = {
    fetchInCompleteReceipt: PropTypes.func.isRequired,
    incompleteReceipt: PropTypes.array.isRequired
}

const mapStateToProps = state =>{
    return{
        incompleteReceipt: state.receiptReducer.receiptData.incompleteReceipt
    }
}

export default connect(mapStateToProps, {fetchInCompleteReceipt}) (TakeAway);