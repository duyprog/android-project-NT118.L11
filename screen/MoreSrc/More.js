import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, SafeAreaView } from 'react-native'
import { Avatar, Title, Caption} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; 
import {fetchStaffByID} from '../../redux/actions/staffActions';
import { AuthContext } from '../../App'

const More = ({navigation, fetchStaffByID, staff}) => {
    const { signOut } = React.useContext(AuthContext);
    // fetchStaffByID('1');
    // console.log(staff);
    return (
        <SafeAreaView>
            <View style={styles.infoCard}>
                <View style={styles.avatarName}>
                    <Avatar.Image 
                        source={{
                            uri: 'https://s.memehay.com/files/posts/20200914/chu-cho-cheems-khoc-va-chap-tay-lay-6b6d3b4400534233c3356b23fd08fb99.jpg'
                        }}
                        size= {80}
                    />
                    <View style={styles.nameView}>
                        <Title> {staff.staffName} </Title>
                        <Caption style={{marginLeft: 10, fontSize: 14}}> {staff.staffPosition} </Caption>
                    </View>
                </View>

                <View style={styles.infoBoxWapper}>
                    <View style={styles.labelView}></View>
                    <View style={{marginTop: 10, marginLeft: 20}}>
                        <View style={{flexDirection: 'row', marginBottom: 10}}>
                            <Icon
                                name='calendar-range'
                                color={'#636363'}
                                size={28} />
                            <Text style={styles.infoText}> {staff.staffDOB} </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginBottom: 10}}>
                            <Icon
                                name='phone'
                                color={'#636363'}
                                size={28} />
                            <Text style={styles.infoText}> {staff.staffPhone} </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginBottom: 10}}>
                            <Icon
                                name='email'
                                color={'#636363'}
                                size={28} />
                            <Text style={styles.infoText}> 18521235@gm.uit.edu.vn </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.infoCard}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Update Info')
                    }}>
                    <View style={styles.btnCard}>
                        <Icon
                            name='account-edit'
                            color={'#636363'}
                            size={28} />
                        <Text style={styles.infoText}> Cập nhật thông tin </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.labelView}></View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Sale')
                    }}>
                    <View style={styles.btnCard}>
                        <Icon
                            name='chart-bar'
                            color={'#636363'}
                            size={28} />
                        <Text style={styles.infoText}> Số liệu kinh doanh </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.labelView}></View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Info App')
                    }}>
                    <View style={styles.btnCard}>
                        <Icon
                            name='information'
                            color={'#636363'}
                            size={28} />
                        <Text style={styles.infoText}> Thông tin ứng dụng </Text>
                    </View>
                </TouchableOpacity>
            </View>

            
            <View style={{alignItems: 'center', marginTop: 15}}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {signOut()}} >
                    <View style={styles.logoutBtn}>
                        <Text style={styles.logoutText}> Đăng xuất </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

More.propTypes = {
    fetchStaffByID: PropTypes.func.isRequired,
    staff: PropTypes.array.isRequired
}
const mapStateToProps = (state) => {
    return{
        staff: state.staffReducer.staffData.staff,
    }
}
export default connect(mapStateToProps, {fetchStaffByID}) (More);

const styles = StyleSheet.create({
    infoCard: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
        marginTop: 10,
        elevation: 8,
        width: "90%",
        alignSelf: 'center',
        marginBottom: 5,
    },
    labelView:{
        borderBottomWidth: 1,
        borderBottomColor: "#d4d4d4",
        width: "90%",
        alignSelf: 'center',
        marginBottom: 5
    },
    btnCard:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginBottom: 10
    },
    avatarName: {
        marginTop: 10,
        marginLeft: 20,
        flexDirection: 'row', 
        alignItems: 'center'
    },
    nameView: {
        marginLeft: 5
    },
    updateBtn: {
        backgroundColor: '#de5543',
        borderRadius: 20,
        height: 30,
        width: 100,
        marginLeft: 25,
        alignItems: 'center',
        elevation: 4
    },
    updateText: {
        textTransform: 'uppercase',
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 5,
        color: '#fff'
    },
    infoBoxWapper: {
        marginTop: 10
    },
    infoText: {
        color: '#636363',
        fontSize: 17,
        marginLeft: 10
    },
    logoutBtn: {
        backgroundColor: '#de5543',
        borderRadius: 20,
        height: 40,
        width: 370,
        alignItems: 'center',
        elevation: 8
    },
    logoutText: {
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 8,
        color: '#fff',
        fontSize: 17
    },
    
})
