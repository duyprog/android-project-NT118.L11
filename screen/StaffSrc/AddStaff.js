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

