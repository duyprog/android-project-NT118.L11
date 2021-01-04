import React, { Component } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, StyleSheet , SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const order = [
    {
        id: 1,
        foodName: 'Pizza',
        price: 300000,
        image: [
            {
                url: 'https://www.thucphamsachhd.com/uploads/files/2017/10/03/Steak-meat-34450442-1302-1020.jpg'
            }
        ],
        sl: 3,
        total: 900000
    },
    {
        id: 2,
        foodName: 'Beefsteak',
        price: 240000,
        image: [
            {
                url: 'https://img-global.cpcdn.com/recipes/39ca2c2a0e1fb011/751x532cq70/mi-y-s%E1%BB%91t-bo-bam-spaghetti-bolognese-recipe-main-photo.jpg'
            }
            
        ],
        sl: 2,
        total: 480000
    }
]

const details = 
    {
        id: 1,
        name: 'Bàn 01',
        time: '10:45 AM',
        code: '0001'
    }

function CartD({ item }) {
    return(
        <View style={{alignSelf: 'center'}}>
            <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                    <Image source={{uri: item.image[0].url}}
                            style={styles.cardImg}
                            resizeMode="cover" />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}> {item.foodName} x{item.sl} </Text>
                    <Text style={styles.cardDetails}> {item.total} </Text>
                </View>
            </View>
        </View>
    )
}
function CartDetail() {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.label}> Thông tin bàn </Text>
                <View style={styles.infoTable}>
                    <Text style={{fontSize: 17}}> Số bàn: {details.name} </Text>
                    <Text style={{fontSize: 17}}> Thời gian: {details.time} </Text>
                    <Text style={{fontSize: 17}}> Mã đơn hàng: {details.code} </Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.label}> Chi tiết đơn hàng </Text>
            </View>
            <FlatList 
                data={order}
                renderItem={({item}) => 
                    <View>
                        <CartD item={item} />
                    </View>}
                keyExtractor={(item) => `${item.id}`}
            />
            <View style={{borderTopWidth: 1, borderTopColor: '#c4c4c4', marginTop: 10}}>
                <Text style={{fontSize: 18, fontWeight: '700', margin: 5}}> Tổng cộng: 1.380.000đ </Text>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    >
                    <View style={styles.payBtn}>
                        <Text style={styles.payText}> Thanh toán </Text>
                    </View>
                </TouchableOpacity>
            </View>
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
        padding: 5
    },
    infoTable: {
        marginBottom: 5,
        marginLeft: 15
    },
    payBtn: {
        backgroundColor: '#de5543',
        borderRadius: 20,
        height: 40,
        width: 130,
        alignItems: 'center',
        elevation: 4,
        marginTop: 5
    },
    payText: {
        textTransform: 'uppercase',
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 8,
        color: '#fff',
        fontSize: 17
    },
    card: {
        height: 80,
        width: '90%',
        flexDirection: 'row',
        marginTop: 10
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontSize: 17,
        color: '#444'
    },
    cardDetails: {
        fontSize: 18,
        color: '#444',
        fontWeight: 'bold',
    },
    btnView: {
        alignItems: 'center', 
        marginTop: 5
    }
})

export default CartDetail
