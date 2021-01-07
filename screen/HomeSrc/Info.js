import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import  PropTypes  from 'prop-types';
import {fetchCurrentCustomer, insertNewCustomer} from '../../redux/actions/customerActions';



const createAlert = () =>
    Alert.alert(
      "Thông báo",
      "Vui lòng nhập đủ tên và số điện thoại!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

const Info = ({navigation, insertNewCustomer, isAtStore, fetchCurrentCustomer, currentCustomerId}) => {

     var name;
     var phone;

    const setName = (value) => {
        name = value; 
    }

    const setPhone = (value) => {
        phone = value;
    }
    
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.label}> Thông tin khách hàng </Text>
                <View style={styles.labelView}></View>
                <View style={styles.infoTable}>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            autoCapitalize='words'
                            autoCompleteType='name'
                            placeholder='Bạn tên gì nè ?'
                            style={{borderBottomWidth: 1, fontSize: 18, borderBottomColor: '#d4d4d4'}}
                            onChangeText= { value => {
                                setName(value);
                            } } />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            autoCapitalize='words'
                            autoCompleteType='email'
                            keyboardType='email-address'
                            placeholder='Thư điện tử của bạn là gì?'
                            style={{borderBottomWidth: 1, fontSize: 18, borderBottomColor: '#d4d4d4'}} />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            autoCapitalize='words'
                            autoCompleteType='cc-number'
                            keyboardType='phone-pad'
                            placeholder='Số điện thoại bạn bao nhiêu nè?'
                            onChangeText = {value => {
                                setPhone(value)}
                            }
                            style={{borderBottomWidth: 1, fontSize: 18, borderBottomColor: '#d4d4d4'}} />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            autoCapitalize='words'
                            autoCompleteType='name'
                            placeholder='Hôm nay bạn đi cùng ai?'
                            style={{borderBottomWidth: 1, fontSize: 18, borderBottomColor: '#d4d4d4'}} />
                    </View>
                </View>
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={ async () => {
                        if(name == undefined || phone == undefined){
                            createAlert();
                        }
                        else
                        {isAtStore == true ? navigation.navigate("Select table") : navigation.navigate("Food Menu");}
                        await insertNewCustomer(name, phone);
                    }}>
                    <View style={styles.payBtn}>
                        <Text style={styles.payText}> Xác nhận </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

Info.propTypes = {
    insertNewCustomer: PropTypes.func.isRequired,
    isAtStore: PropTypes.bool.isRequired
}
const mapStateToProps = state => {
    return{ 
        isAtStore : state.customerReducer.customerData.isAtStore, 
        currentCustomerId: state.customerReducer.customerData.currentCustomerId
    }
}
export default connect(mapStateToProps, {insertNewCustomer, fetchCurrentCustomer}) (Info);
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

