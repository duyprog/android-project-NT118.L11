import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';



const createAlert = () =>
    Alert.alert(
      "Thông báo",
      "Vui lòng nhập đầy đủ thông tin!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

const successAlert = () =>
    Alert.alert(
      "Thông báo",
      "Đã tạo nhân viên thành công!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    
function change (value) {
    role = value;
}

const AddStaff = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("staff");
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
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.role}> Chức vụ:</Text>
                        <Picker
                            selectedValue={selectedValue}
                            style={{height: 50, width: 140, marginLeft: 15}}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedValue(itemValue)
                            }>
                            <Picker.Item label="Quản lý" value="manager" />
                            <Picker.Item label="Nhân viên" value="staff" />
                        </Picker>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.label}> Thông tin đăng nhập </Text>
                <View style={styles.labelView}></View>
                <View style={styles.infoTable}>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            autoCapitalize='words'
                            autoCompleteType='email'
                            keyboardType='email-address'
                            placeholder='Địa chỉ email'
                            style={{borderBottomWidth: 1, fontSize: 18, borderBottomColor: '#d4d4d4'}} />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            secureTextEntry={true}
                            placeholder='Mật khẩu'
                            style={{borderBottomWidth: 1, fontSize: 18, borderBottomColor: '#d4d4d4'}} />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            secureTextEntry={true}
                            placeholder='Nhập lại mật khẩu'
                            style={{borderBottomWidth: 1, fontSize: 18, borderBottomColor: '#d4d4d4'}} />
                    </View>
                </View>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Staff');
                        successAlert();
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
    role:{
        fontSize: 20,
        marginTop: 10
    },
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

export default AddStaff