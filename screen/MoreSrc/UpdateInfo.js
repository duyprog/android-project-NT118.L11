import React, { Component } from 'react';
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