import React, { Component, useState } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import NumericInput from 'react-native-numeric-input'
export default function HotpotItems(props){

    const{hotpotItem} = props;
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
                setModalVisible(true);
            }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modelLabel}> Chọn số lượng </Text>
                        <NumericInput 
                            minValue={0}
                            rounded={true}
                            totalHeight={40}
                            onChange={value => console.log(value)} />
                        <View style={styles.compBtn}>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <Text style={styles.compText}>Hoàn tất</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.container}>
                <Image style={styles.img} source={{uri: hotpotItem.images[0].url}}/>
                <View style={styles.info}>
                    <Text style={styles.name}>{hotpotItem.name}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{hotpotItem.price}đ</Text>
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
        height: 220,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    info:{
        padding: 8,
    },
    name: {
        fontSize: 18,
        marginBottom: 8,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price:{
        fontSize: 16,
        flex: 1,
        fontWeight: '700'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#000000aa"
    },
    modalView: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "white",
        alignItems: 'center',
        borderRadius: 10,
        padding: 40,
        shadowColor: "#000",
    },
    modelLabel: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 15
    },
    compBtn: {
        backgroundColor: '#de5543',
        borderRadius: 20,
        height: 35,
        width: 100,
        alignItems: 'center',
        elevation: 4,
        marginTop: 15
    },
    compText: {
        textTransform: 'uppercase',
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 8,
        color: '#fff',
        fontSize: 14
    }
})