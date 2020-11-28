import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
// import { Modal } from 'react-native-paper';
// import {ModalTester} from '../components/ChooseModal'



export default function FoodItems(props){

    const{foodItem} = props;

    return(
        <TouchableOpacity>
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: foodItem.images[0].url}}/>
            <View style={styles.info}>
                <Text style={styles.name}>{foodItem.name}</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>{foodItem.price}đ</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },
    container: {
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    img:{
        height: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    info:{
        padding: 8,
    },
    name: {
        fontSize: 16,
        marginBottom: 8,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price:{
        fontSize: 16,
        color: '#888',
        flex: 1,
    }
})