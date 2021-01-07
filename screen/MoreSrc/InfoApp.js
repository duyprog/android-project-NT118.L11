import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import android from '../../image/more/Android_robot.png'
import react from '../../image/more/react.png'
import redux from '../../image/more/redux.png'
import uit from '../../image/more/logo-uit.png'

export default class InfoApp extends Component {
    render() {
        return (
            <View>
                <View style={styles.infoCard}>
                    <View style={styles.infoApp}>
                        <Text style={styles.infoAppLabel}> Về đồ án </Text>
                        <Text style={styles.infoAppText}> Ứng dụng quản lý kinh doanh nhà hàng </Text>
                        <View style={styles.labelView}></View>
                    </View>
                    <Text style={styles.infoAppTextz}> Môn học: Phát triển ứng dụng trên thiết bị di dộng </Text>
                    <Text style={styles.infoAppTextz}> Giảng viên: Trần Hồng Nghi </Text>
                    <Text style={styles.infoAppTextz}> Được hiện bởi: </Text>
                    <View style={styles.infoApp}>
                        <Text style={styles.infoAppText}> 18520669 - Phạm Khắc Duy</Text>
                        <Text style={styles.infoAppText}> 18521235 - Hoàng Văn Mỹ Phi</Text>
                        <Text style={styles.infoAppText}> 18521500 - Tạ Nguyễn Chung Tín</Text>
                    </View>
                </View>
                <View style={styles.infoCard}>
                    <View style={styles.infoApp}>
                        <Text style={styles.infoAppLabel}> Powered by </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={uit} style = {styles.ima} />
                            <Image source={react} style = {styles.ima} />
                            <Image source={redux} style = {styles.ima} />
                            <Image source={android} style = {styles.ima} />
                        </View>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ima: {
        height: 40,
        width: 40,
        margin: 10
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
    },
    labelView:{
        borderBottomWidth: 1,
        borderBottomColor: "#d4d4d4",
        width: "90%",
        alignSelf: 'center',
        marginBottom: 5
    },
})