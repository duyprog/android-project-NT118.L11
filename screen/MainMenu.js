import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import Table from '../image/mainMenu/dining-table.png'
import TakeAway from '../image/mainMenu/take-away.png'
import Bill from '../image/mainMenu/bill.png'
import CategoryListItems from '../components/CategoryListItems'

const MainMenu = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                    navigation.navigate('Food Menu')
                }}>
                <CategoryListItems title={"Tại chỗ"} uri={require('../image/mainMenu/dining-table.png')} />
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                navigation.navigate('Food Menu')
                }}>
                <CategoryListItems title={"Mang đi"} uri={require('../image/mainMenu/take-away.png')} />
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                navigation.navigate('Food Menu')
                }}>
                <CategoryListItems title={"Hóa đơn"} uri={require('../image/mainMenu/bill.png')} />
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                navigation.navigate('Staff')
                }}>
                <CategoryListItems title={"Nhân sự"} uri={require('../image/mainMenu/staff.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default MainMenu