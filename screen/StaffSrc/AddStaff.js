import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {insertAStaff} from '../../networking/server'
export default class AddStaff extends Component {
    constructor(props){
        super(props);
        this.state={
            staffID:'',
            staffName: '',
            dob: '',
            phone:'',
            position: '',
            username: '',
            passwd: '',
            
        }
    }

    render() {
        return (
            <View>
                <View>
                    <Text> Họ tên </Text>
                    <TextInput 
                        onChangeText= { text => this.setState({staffName: text})}
                        placeholder="Họ tên" />
                </View>

                <View>
                    <Text> ID </Text>
                    <TextInput
                        onChangeText={text => this.setState({staffID: text})}
                        placeholder="ID" />
                </View>

                <View>
                    <Text> Chức vụ </Text>
                    <TextInput
                        onChangeText={text => this.setState({position: text})}   
                        placeholder="Chức vụ" />
                </View>
                <View>
                    <Text> Ngày sinh </Text>
                    <TextInput
                        onChangeText={text => this.setState({dob: text})}   
                        placeholder="Ngày sinh" />
                </View>
                <View>
                    <Text>Số điện thoại</Text>
                    <TextInput
                        onChangeText={text => this.setState({phone: text})}   
                        placeholder="Số điện thoại" />
                </View>
                <View>
                    <Text>Tên đăng nhập</Text>
                    <TextInput
                        onChangeText={text => this.setState({username: text})}   
                        placeholder="Tên đăng nhập" />
                </View>
                <View>
                    <Text>Mật khẩu</Text>
                    <TextInput
                        onChangeText={text => this.setState({passwd: text})}   
                        placeholder="Mật khẩu" />
                </View>
                <TouchableOpacity onPress={() =>{
                    if (this.state.staffName.length == 0|| this.state.staffID.length == 0){
                        alert("Bạn phải nhập đầy đủ tên và id");
                        return;
                    }
                    const newStaff = {
                        STAFFID: this.state.staffID,
                        STAFFNAME: this.state.staffName,
                        DOB: this.state.dob,
                        PHONE: this.state.phone,
                        username: this.state.username,
                        passwd: this.state.passwd,
                        position: this.state.position

                    }
                    insertAStaff(newStaff).then((res) =>{
                            alert('Them thanh cong');
                    }).catch(err => console.log(err));
                }}>
                    <Text> Thêm </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
