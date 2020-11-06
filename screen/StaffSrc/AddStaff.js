import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, ScrollView, Button } from 'react-native'
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
            <ScrollView style={styles.viewStyle} >
                <View>
                    <View>
                        <Text style={styles.textLabel}> Thông tin cá nhân </Text>

                        <TextInput
                            style={styles.textStyle} 
                            onChangeText= { text => this.setState({staffName: text})}
                            placeholder="Họ và tên:" />

                        <TextInput
                            style={styles.textStyle}
                            onChangeText={text => this.setState({dob: text})}   
                            placeholder="Ngày sinh:" />

                        <TextInput
                            style={styles.textStyle}
                            onChangeText={text => this.setState({phone: text})}   
                            placeholder="Số điện thoại:" />

                        <TextInput
                            style={styles.textStyle}
                            onChangeText={text => this.setState({position: text})}   
                            placeholder="Chức vụ:" />
                    </View>

                    <View>
                        <Text style={styles.textLabel}> Thông tin đăng nhập </Text>

                        <TextInput
                            style={styles.textStyle}
                            onChangeText={text => this.setState({staffID: text})}
                            placeholder="ID tài khoản:" />

                        <TextInput
                            style={styles.textStyle}
                            onChangeText={text => this.setState({username: text})}   
                            placeholder="Tên đăng nhập:" />
            
                        <TextInput
                            style={styles.textStyle}
                            onChangeText={text => this.setState({passwd: text})}   
                            placeholder="Mật khẩu:" /> 
                    </View>
                </View>

                <View>
                    <TouchableOpacity
                            style={{justifyContent: 'center'}}
                            onPress={() =>{
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

<<<<<<< HEAD
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
=======
                    }
                    insertAStaff(newStaff).then((res) =>{
                            alert('Them thanh cong');
                    }).catch(err => console.log(err));
                }}>
                    <Text> Thêm </Text>
                </TouchableOpacity>
            </View>
>>>>>>> c527b274bef71b3a84a5def2317c89923f1c47dd
        )
    }
}


const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#FFF'
    },
    textStyle: {
        marginLeft: 23,
        fontWeight: '600',
        fontSize: 18,
        marginTop: 6
    },
    textInput: {
        marginLeft: 23
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