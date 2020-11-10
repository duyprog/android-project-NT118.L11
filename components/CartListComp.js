import React from 'react'
import { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'

import Table from '../image/cart/table-cart.png'

export default class CartListComp extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={styles.view}>
                <Image  source={Table}
                        style={styles.imageStyle} />
                <View style={{justifyContent: 'center'}}>
                    <Text style={styles.textTable}> {this.props.numberTable} </Text>
                    <Text style={styles.textTime}> {this.props.time} </Text>
                </View>
            </View>
        );
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

