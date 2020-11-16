import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet , SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const order = [
    {
        id: 1,
        foodName: 'Pizza',
        price: 300000
    },
    {
        id: 2,
        foodName: 'Beefsteak',
        price: 240000
    }
]

const details = [
    {
        id: 1,
        name: 'Bàn 01',
        time: '10:45 AM',
        code: '0001',
        order: order
    }
]

function CartD({ item }) {
    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.label}> Thông tin bàn </Text>
                <View style={styles.infoTable}>
                    <Text style={{fontSize: 17}}> Số bàn: {item.name} </Text>
                    <Text style={{fontSize: 17}}> Thời gian: {item.time} </Text>
                    <Text style={{fontSize: 17}}> Mã đơn hàng: {item.code} </Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.label}> Chi tiết đơn hàng </Text>
                <Text>  </Text>
            </View>
        </View>
    )
}

function CartDetail() {
    return(
        <SafeAreaView>
            <FlatList 
                data={details}
                renderItem={({item}) => 
                    <View>
                        <CartD item={item} />
                    </View>}
                keyExtractor={(item) => `${item.id}`}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        marginBottom: 5
    },
    infoTable: {
        marginBottom: 5,
        marginLeft: 15
    }
})

export default CartDetail
