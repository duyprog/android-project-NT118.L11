import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Staff = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                    navigation.navigate('Food Menu')
                }}>
                <Text> Danh sách nhân viên </Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                    navigation.navigate('Add Staff')
                }}>
                <Text> Thêm nhân viên </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Staff
