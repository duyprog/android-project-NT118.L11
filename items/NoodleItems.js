import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default function NoodleItems(props){

    const{noodleItem} = props;

    return(
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: noodleItem.images[0].url}}/>
            <View style={styles.info}>
                <Text style={styles.name}>{noodleItem.name}</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>{noodleItem.price}đ</Text>
                    <TouchableOpacity>
                        <Text style={styles.cartText}> Chọn </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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