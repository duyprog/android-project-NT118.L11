import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, SafeAreaView } from 'react-native'
import { Avatar, Title, Caption} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { AuthContext } from '../../App'

const More = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);
    return (
        <SafeAreaView>
            <View style={{backgroundColor: '#fff'}}>
                <View style={styles.avatarName}>
                    <Avatar.Image 
                        source={{
                            uri: 'https://i.kym-cdn.com/photos/images/newsfeed/001/658/936/411.jpg'
                        }}
                        size= {80}
                    />
                    <View style={styles.nameView}>
                        <Title> Hoang My Phi</Title>
                        <Caption> Owner & Founder </Caption>
                    </View>
                    <View >
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Update Info')
                            }}>
                            <View style={styles.updateBtn}>
                                <Text style={styles.updateText}> Cập nhật </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.infoBoxWapper}>
                    <View style={{marginLeft: 30}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon
                                    name='calendar-range'
                                    color={'#636363'}
                                    size={28} />
                                <Text style={styles.infoText}> 11-11-2020 </Text>
                            </View>
                            <View style={{flexDirection: 'row', marginLeft: 80}}>
                            <Icon
                                name='phone'
                                color={'#636363'}
                                size={28} />
                            <Text style={styles.infoText}> 0909123456 </Text>
                        </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Icon
                                name='email'
                                color={'#636363'}
                                size={28} />
                            <Text style={styles.infoText}> 18521235@gm.uit.edu.vn </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: '#fff'}}>
                <View style={styles.infoApp}>
                    <Text style={styles.infoAppLabel}> Về ứng dụng </Text>
                    <Text style={styles.infoAppText}> Đồ án: ứng dụng quản lý kinh doanh nhà hàng </Text>
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
    avatarName: {
        marginTop: 20,
        marginLeft: 25,
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
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        height: 100,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoText: {
        color: '#636363',
        fontSize: 17
    },
    logoutBtn: {
        backgroundColor: '#de5543',
        borderRadius: 20,
        height: 40,
        width: 130,
        alignItems: 'center',
        elevation: 4
    },
    logoutText: {
        textTransform: 'uppercase',
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 8,
        color: '#fff',
        fontSize: 17
    },
    infoApp: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        height: 100,
        marginTop: 10,
        alignItems: 'center'
    },
    infoAppText: {
        fontSize: 18,
        color: '#000',
        marginLeft: 10,
        marginRight: 10
    },
    infoAppLabel: {
        fontSize: 20, 
        color: '#000',
        fontWeight: '700',
        textTransform: 'uppercase'
    }
})

export default More