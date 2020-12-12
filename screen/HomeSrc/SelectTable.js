import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import empty from '../../image/foodMenu/empty-table.png'
import serving from '../../image/foodMenu/serving-table.png'

const tableList = [
    {
        id: 1,
        name:'Bàn 01',
        isServing: true
    },
    {
        id: 2,
        name:'Bàn 02',
        isServing: false
    },
    {
        id: 3,
        name:'Bàn 03',
        isServing: false
    },
    {
        id: 4,
        name:'Bàn 04',
        isServing: false
    },
    {
        id: 5,
        name:'Bàn 05',
        isServing: false
    },
    {
        id: 6,
        name:'Bàn 06',
        isServing: true
    },
    {
        id: 7,
        name:'Bàn 07',
        isServing: true
    },
    {
        id: 8,
        name:'Bàn 08',
        isServing: true
    },
    {
        id: 9,
        name:'Bàn 09',
        isServing: true
    },
    {
        id: 10,
        name:'Bàn 10',
        isServing: true
    },
    {
        id: 11,
        name:'Bàn 11',
        isServing: true
    },
    {
        id: 12,
        name:'Bàn 12',
        isServing: true
    },
    {
        id: 13,
        name:'Bàn 13',
        isServing: true
    },
    {
        id: 14,
        name:'Bàn 14',
        isServing: true
    },
    {
        id: 15,
        name:'Bàn 15',
        isServing: true
    }
]

function Table({item}) {
    const navigation = useNavigation()
    var ima = item.isServing ? serving : empty
    return(
        <TouchableOpacity
            activeOpacity={0.5}
            disabled={item.isServing}
            onPress={() => { navigation.navigate('Food Menu')
            }}>
            <View style={styles.viewStyle}>
                <View>
                    <View style={styles.container}>
                        <Image style={styles.img} source={ima}/>
                    </View>
                    <View style={styles.info}>
                            <Text style={styles.name}>{item.name}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

function SelectTable() {
    return(
        <SafeAreaView>
            <FlatList
                data={tableList}
                numColumns={3}
                renderItem={({item}) => 
                    <View style={styles.wrapper}>
                        <Table
                            item={item} />
                    </View>}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 8,
        marginBottom: 10
    },
    viewStyle: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 10
    },
    container: {
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    img:{
        height: 90,
        width: 90,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        marginTop: 10
    },
    info:{
        alignItems: 'center'
    },
    name: {
        fontSize: 18,
        marginBottom: 8,
        fontWeight: '600'
    }
})

export default SelectTable