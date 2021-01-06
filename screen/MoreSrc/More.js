import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, SafeAreaView } from 'react-native'
import { Avatar, Title, Caption} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const More = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.infoCard}>
                <View style={styles.avatarName}>
                    <Avatar.Image 
                        source={{
                            uri: 'https://i.kym-cdn.com/photos/images/newsfeed/001/658/936/411.jpg'
                        }}
                        size= {80}
                    />
                    <View style={styles.nameView}>
                        <Title> Hoang My Phi</Title>
                        <Caption style={{marginLeft: 10}}> Owner & Founder </Caption>
                    </View>
                </View>

                <View style={styles.infoBoxWapper}>
                    <View style={{marginTop: 10, marginLeft: 30}}>
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

            <View>
                <View>
                    
                </View>
            </View>

            <View style={styles.infoCard}>
                <View style={styles.infoApp}>
                    <Text style={styles.infoAppLabel}> Về ứng dụng </Text>
                    <View style={styles.labelView}></View>
                    <Text style={styles.infoAppText}> Đồ án: ứng dụng quản lý kinh doanh dành cho nhà hàng </Text>
                </View>
            </View>
            <View style={{alignItems: 'center', marginTop: 15}}>
                <TouchableOpacity
                    activeOpacity={0.5}>
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
        borderTopColor: '#d4d4d4',
        borderTopWidth: 1,
        marginTop: 10
    },
    infoText: {
        color: '#636363',
        fontSize: 17
    },
    logoutBtn: {
        backgroundColor: '#de5543',
        borderRadius: 20,
        height: 40,
        width: 330,
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
        marginLeft: 10,
        marginRight: 10
    },
    infoAppLabel: {
        fontSize: 20, 
        color: '#000',
        fontWeight: '700',
        textTransform: 'uppercase'
    },
    infoCard: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
        marginTop: 10,
        elevation: 8,
        width: "90%",
        alignSelf: 'center',
        marginBottom: 10
    },
    labelView:{
        borderBottomWidth: 1,
        borderBottomColor: "#d4d4d4",
        width: "90%",
        alignSelf: 'center',
        marginBottom: 5
    }
})

export default More