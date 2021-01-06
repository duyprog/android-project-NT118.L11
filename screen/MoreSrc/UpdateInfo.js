import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';


const UpdateInfo = ({navigation}) => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.label}> Thông tin nhân viên </Text>
                <View style={styles.labelView}></View>
                <View style={styles.infoTable}>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            autoCapitalize='words'
                            autoCompleteType='name'
                            placeholder='Họ và tên'
                            style={{borderBottomWidth: 1, fontSize: 18, borderBottomColor: '#d4d4d4'}} />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            autoCapitalize='words'
                            autoCompleteType='cc-number'
                            keyboardType='phone-pad'
                            placeholder='Số điện thoại'
                            style={{borderBottomWidth: 1, fontSize: 18, borderBottomColor: '#d4d4d4'}} />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            autoCapitalize='words'
                            autoCompleteType='off'
                            keyboardType='phone-pad'
                            placeholder='Ngày sinh'
                            style={{borderBottomWidth: 1, fontSize: 18, borderBottomColor: '#d4d4d4'}} />
                    </View>
                </View>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('More')
                    }}>
                    <View style={styles.payBtn}>
                        <Text style={styles.payText}> Xác nhận </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    labelView:{
        borderBottomWidth: 1,
        borderBottomColor: "#d4d4d4",
        width: "90%",
        alignSelf: 'center',
        marginBottom: 5
    },
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
        padding: 5,
        borderRadius: 10,
        marginTop: 10,
        elevation: 8,
        width: "90%",
        alignSelf: 'center'
    },
    infoTable: {
        marginBottom: 5,
        marginLeft: 15
    },
    btnView: {
        alignSelf: 'center', 
        marginTop: 10,
        width: "90%"
    },
    payBtn: {
        backgroundColor: '#de5543',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        elevation: 8,
        marginTop: 5
    },
    payText: {
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 9,
        color: '#fff',
        fontSize: 17
    },
    text: {
        fontSize: 18
    }
})

export default UpdateInfo