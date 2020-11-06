import React, { Component } from 'react'
import { Button, Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import List from '../../image//team.png'
import Add from '../../image/resume.png'

const Staff = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Staff List')
                    }}>
                    <View  style={styles.viewStyle}>
                        <Image source={ List }
                               style={styles.imageView} />
                        <Text style={styles.text}> Danh sách nhân sự </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Add Staff')
                    }}>
                    <View  style={styles.viewStyle}>
                        <Image source={ Add }
                               style={styles.imageView} />
                        <Text style={styles.text}> Thêm nhân sự </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#FFF',
        elevation: 5,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 10,
        marginLeft: 10
    },
    imageView: {
        width: 80,
        height: 80,
        marginLeft: 15
    },
    text: {
        margin: 15,
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'uppercase'
    }
})

export default Staff
