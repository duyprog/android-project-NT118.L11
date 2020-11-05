import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {insertAStaff} from '../../networking/server'
export default class AddStaff extends Component {
    constructor(props){
        super(props);
        this.state={
            identify:'',
            staffName: '',
            position: '',
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
                        onChangeText={text => this.setState({identify: text})}
                        placeholder="ID" />
                </View>

                <View>
                    <Text> Chức vụ </Text>
                    <TextInput
                        onChangeText={text => this.setState({position: text})}   
                        placeholder="Chức vụ" />
                </View>

                <TouchableOpacity onPress={() =>{
                    if (this.state.staffName.length == 0|| this.state.identify.length == 0){
                        alert("Bạn phải nhập đầy đủ tên và id");
                        return;
                    }
                    const newStaff = {
                        identify: this.state.identify,
                        staffName: this.state.staffName,
                        position: this.state.position
                    }
                    insertAStaff(newStaff).then((res) =>{
                            alert('Them thanh cong');
                    })
                }}>
                    <Text> Thêm </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
