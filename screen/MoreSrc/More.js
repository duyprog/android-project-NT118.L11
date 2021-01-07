import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, SafeAreaView } from 'react-native'
import { Avatar, Title, Caption} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { AuthContext } from '../../App'

const More = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);
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
                        <Title> Hoang My Phi</Title>
                        <Caption style={{marginLeft: 10}}> Owner & Founder </Caption>
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
                            <Text style={styles.infoText}> 11-11-2020 </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginBottom: 10}}>
                            <Icon
                                name='phone'
                                color={'#636363'}
                                size={28} />
                            <Text style={styles.infoText}> 0909123456 </Text>
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
                <TouchableOpacity>
                    <View style={styles.btnCard}>
                        <Icon
                            name='chart-bar'
                            color={'#636363'}
                            size={28} />
                        <Text style={styles.infoText}> Số liệu kinh doanh </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.infoCard}>
                <View style={styles.infoApp}>
                    <Text style={styles.infoAppLabel}> Về đồ án </Text>
                    <Text style={styles.infoAppText}> Ứng dụng quản lý kinh doanh nhà hàng </Text>
                    <View style={styles.labelView}></View>
                </View>
                <Text style={styles.infoAppTextz}> Được hiện bởi: </Text>
                <View style={styles.infoApp}>
                    <Text style={styles.infoAppText}> 18520669 - Phạm Khắc Duy</Text>
                    <Text style={styles.infoAppText}> 18521235 - Hoàng Văn Mỹ Phi</Text>
                    <Text style={styles.infoAppText}> 18521500 - Tạ Nguyễn Chung Tín</Text>
                </View>
                
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

const styles = StyleSheet.create({
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
    infoApp: {
        marginTop: 5,
        alignItems: 'center'
    },
    infoAppText: {
        fontSize: 18,
        color: '#000',
        marginBottom: 5
    },
    infoAppTextz: {
        fontSize: 18,
        color: '#000',
        marginLeft: 20
    },
    infoAppLabel: {
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#6a6b6a',
        fontSize: 23,
        marginTop: 5
    },
    infoCard: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
        marginTop: 10,
        elevation: 8,
        width: "90%",
        alignSelf: 'center',
        marginBottom: 5,
    }
})

export default More