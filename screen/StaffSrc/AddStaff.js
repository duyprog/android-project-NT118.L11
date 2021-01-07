<<<<<<< HEAD
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {insertNewStaff} from '../../redux/actions/staffActions';

const AddStaff = ({navigation, insertNewStaff}) => {
  var staffname,
    staffdob,
    staff_phone,
    staffusername,
    staffpasswd,
    staffposition;
  const setName = (value) => {
    staffname = value;
  };
  const setDOB = (value) => {
    staffdob = value;
  };
  const setPhone = (value) => {
    staff_phone = value;
  };
  const setUsername = (value) => {
    staffusername = value;
  };
  const setPasswd = (value) => {
    staffpasswd = value;
  };
  const setPosition = (value) => {
    staffposition = value;
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.label}> Thông tin nhân viên </Text>
        <View style={styles.labelView}></View>
        <View style={styles.infoTable}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              autoCapitalize="words"
              autoCompleteType="name"
              placeholder="Họ và tên"
              style={{
                borderBottomWidth: 1,
                fontSize: 18,
                borderBottomColor: '#d4d4d4',
              }}
              onChangeText={(value) => {
                setName(value);
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              autoCapitalize="words"
              autoCompleteType="cc-number"
              keyboardType="phone-pad"
              placeholder="Số điện thoại"
              style={{
                borderBottomWidth: 1,
                fontSize: 18,
                borderBottomColor: '#d4d4d4',
              }}
              onChangeText={(value) => {
                setPhone(value);
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              autoCapitalize="words"
              autoCompleteType="off"
              keyboardType="phone-pad"
              placeholder="Ngày sinh"
              style={{
                borderBottomWidth: 1,
                fontSize: 18,
                borderBottomColor: '#d4d4d4',
              }}
              onChangeText={(value) => {
                setDOB(value);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}> Thông tin đăng nhập </Text>
        <View style={styles.labelView}></View>
        <View style={styles.infoTable}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              autoCapitalize="words"
              placeholder="Username"
              style={{
                borderBottomWidth: 1,
                fontSize: 18,
                borderBottomColor: '#d4d4d4',
              }}
              onChangeText={(value) => {
                setUsername(value);
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              secureTextEntry={true}
              placeholder="Mật khẩu"
              style={{
                borderBottomWidth: 1,
                fontSize: 18,
                borderBottomColor: '#d4d4d4',
              }}
              onChangeText={(value) => {
                setPasswd(value);
              }}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              secureTextEntry={true}
              placeholder="Nhập lại mật khẩu"
              style={{
                borderBottomWidth: 1,
                fontSize: 18,
                borderBottomColor: '#d4d4d4',
              }}
              onChangeText={(value) => {
                setPosition(value);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Staff');
            insertNewStaff(staffname, staffdob, staff_phone, staffusername, staffpasswd, staffposition);
            console.log(staffname, staffdob, staff_phone, staffusername, staffpasswd, staffposition);
          }}>
          <View style={styles.payBtn}>
            <Text style={styles.payText}> Xác nhận </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

AddStaff.propTypes = {
    insertNewStaff: PropTypes.func.isRequired,
}

export default connect(null, {insertNewStaff}) (AddStaff);

const styles = StyleSheet.create({
  labelView: {
    borderBottomWidth: 1,
    borderBottomColor: '#d4d4d4',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 5,
  },
  label: {
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#6a6b6a',
    fontSize: 23,
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    elevation: 8,
    width: '90%',
    alignSelf: 'center',
  },
  infoTable: {
    marginBottom: 5,
    marginLeft: 15,
  },
  btnView: {
    alignSelf: 'center',
    marginTop: 10,
    width: '90%',
  },
  payBtn: {
    backgroundColor: '#de5543',
    borderRadius: 20,
    height: 45,
    alignItems: 'center',
    elevation: 8,
    marginTop: 5,
  },
  payText: {
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 9,
    color: '#fff',
    fontSize: 17,
  },
  text: {
    fontSize: 18,
  },
});

=======
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
                        {/* <Picker 
                                selectedValue={this.state.position}
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
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
