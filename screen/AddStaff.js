import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class AddStaff extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text> Họ tên </Text>
                    <TextInput placeholder="Họ tên" />
                </View>

                <View>
                    <Text> ID </Text>
                    <TextInput placeholder="ID" />
                </View>

                <View>
                    <Text> Chức vụ </Text>
                    <TextInput placeholder="Chức vụ" />
                </View>

                <TouchableOpacity>
                    <Text> Thêm </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
