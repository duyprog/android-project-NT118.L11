import React from 'react'
import { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'

import StaffAvatar from '../image/staff-avatar.png'
export default class StaffListComp extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={styles.view}>
                <Image  source={StaffAvatar}
                        style={styles.imageStyle} />
                <View>
                    <Text style={styles.textName}> {this.props.name} </Text>
                    <Text style={styles.textRole}> {this.props.role} </Text>
                </View>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    staffCard: {
        marginTop: 5
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 12
    },
    view: {
        flexDirection: 'row',
        padding: 6,
        backgroundColor: '#FFF',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 8,
        elevation: 5
    },
    textName: {
        fontWeight: '700',
        fontSize: 18,
        textTransform: 'uppercase',
        marginLeft: 12,
        marginTop: 5
    },
    textRole: {
        fontSize: 15,
        marginLeft: 12
    }
}) 

