import React, { Component } from 'react'
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
            id:'',
            staffName: '',
            staffDOB: '',
            staffPhone:'',
            staffPosition: '',
            staffusername: '',
            staffPasswd: '',
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
                       
                        {/* <TextInput
                            style={styles.textStyle}
                            onChangeText={text => this.setState({staffDOB: text})}   
                            placeholder="Ngày sinh:" /> */}

                        <TextInput
                            label="Số điện thoại"
                            style={styles.textInput}
                            onChangeText={text => this.setState({staffPhone: text})}   
                            placeholder="Số điện thoại" />
                        <Text style={{marginLeft: 26,
                                    fontWeight: '600',
                                    fontSize: 17,
                                    marginTop: 6}}>Chức vụ: </Text>
                        <Picker 
                                selectedValue={this.state.staffPosition}
                                style={{height: 50, width: 200,color: 'gray' , marginLeft: 23, borderWidth: 1}}
                                onValueChange={(itemValue, itemIndex) =>{
                                    this.setState({staffPosition: itemValue});
                                    }}>
                            <Picker.Item label="Lựa chọn chức vụ..." value="0"/>                                        
                            <Picker.Item label="Quản lý" value="Quan Ly"/>
                            <Picker.Item label="Nhân viên" value="Nhan Vien"/>
                        </Picker>
                        <Text style={styles.textStyle}>{this.props.staffPosition}</Text>
{/* 
                        <TextInput
                            style={styles.textStyle}
                            onChangeText={text => this.setState({staffPosition: text})}   
                            placeholder="Chức vụ:" /> */}
                    </View>

                    <View>
                        <Text style={styles.textLabel}> Thông tin đăng nhập </Text>

                        {/* <TextInput
                            label="ID tài khoản"
                            style={styles.textInput}
                            onChangeText={text => this.setState({id: text})}
                            placeholder="ID tài khoản" /> */}

                        <TextInput
                            label="Tên đăng nhập"
                            style={styles.textInput}
                            onChangeText={text => this.setState({staffusername: text})}   
                            placeholder="Tên đăng nhập" />
            
                        <TextInput
                            label="Mật khẩu"
                            style={styles.textInput}
                            onChangeText={text => this.setState({staffPasswd: text})}   
                            placeholder="Mật khẩu" /> 
                    </View>
                </View>

                <View>
                    <TouchableOpacity
                            style={{justifyContent: 'center'}}
                            onPress={() =>{
                        if (this.state.staffName.length == 0){
                            alert("Bạn phải nhập đầy đủ tên và id");
                            return;
                        }
                        const newStaff = {
                            id: this.state.id,
                            staffName: this.state.staffName,
                            staffDOB: this.state.staffDOB,
                            staffPhone: this.state.staffPhone,
                            staffusername: this.state.staffusername,
                            staffPasswd: this.state.staffPasswd,
                            staffPosition: this.state.staffPosition

                        }
                        insertAStaff(newStaff).then((res) =>{
                                alert('Đã thêm thành công');
                            })
                        }}>
                        <View style={styles.addBtn}>
                            <Button
                                title='Thêm'
                                color='#de5543'/>
                        </View>
                    </TouchableOpacity>
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
