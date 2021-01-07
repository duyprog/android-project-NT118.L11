import React, { Component } from 'react'
<<<<<<< HEAD
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
=======
import { Text, View, StyleSheet, ScrollView, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {insertAStaff} from '../../networking/server'
import {Picker} from '@react-native-picker/picker'
import DatePicker from 'react-native-datepicker'
import {TextInput} from 'react-native-paper'
export default class AddStaff extends Component {
    constructor(props){
        super(props);
        this.state={
            staffID:'',
            staffName: '',
            dob: '',
            phone:'',
            position: 'Chọn vai trò của nhân viên',
            username: '',
            passwd: '',
            
        }
    }
    render() {
        return (
            <ScrollView style={styles.viewStyle} >
                <View>
                    <View>
                        <Text style={styles.textLabel}> Thông tin cá nhân </Text>

                        <TextInput
                            label="Họ và tên"
                            style={styles.textInput} 
                            onChangeText= { text => this.setState({staffName: text})}
                            placeholder="Họ và tên" />
                        <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={styles.textStyle}>Ngày sinh : </Text>
                        <TextInput
                            label="Ngày sinh"
                            style={styles.textInput}
                            onChangeText={date => this.setState({staffDOB: date})}   
                            placeholder="Ngày sinh" />
                          </View>
                        <TextInput
                            label="Số điện thoại"
                            style={styles.textInput}
                            onChangeText={text => this.setState({phone: text})}   
                            placeholder="Số điện thoại" />
                        <Text style={{marginLeft: 26,
                                    fontWeight: '600',
                                    fontSize: 17,
                                    marginTop: 6}}>Chức vụ: </Text>
                        <Picker 
                                selectedValue={this.state.position}
                                style={{height: 50, width: 200,color: 'gray' , marginLeft: 23, borderWidth: 1}}
                                onValueChange={(itemValue, itemIndex) =>{
                                    this.setState({position: itemValue});
                                    }}>
                            <Picker.Item label="Lựa chọn chức vụ..." value="0"/>                                        
                            <Picker.Item label="Quản lý" value="Quan Ly"/>
                            <Picker.Item label="Nhân viên" value="Nhan Vien"/>
                        </Picker>
                        <Text style={styles.textStyle}>{this.props.position}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#FFF'
    },
    textStyle: {
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 18,
        marginTop: 6
    },
    textInput: {
        marginHorizontal: 20,
        backgroundColor: '#FFF',
        marginVertical: 5,
        color: '#f4a460'
    },
    textLabel: {
        color: '#de5543',
        fontWeight: '700',
        fontSize: 24,
        marginTop: 10,
        marginLeft: 10
    },
    addBtn: {
        height: 50,
        margin: 25,
        borderRadius: 50
    },
    container: {
        borderRadius: 12,
        marginBottom: 5
    }
})
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
