import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import MainMenuList from '../components/MainMenuListItems'

import Table from '../image/mainMenu/dining-table.png'
import TakeAway from '../image/mainMenu/take-away.png'
import Bill from '../image/mainMenu/bill.png'
import CategoryListItems from '../components/CategoryListItems'

const MainMenu = ({ navigation }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
                navigation.navigate('Food Menu')
            }}>
            <CategoryListItems title={"Tại chỗ"} uri={require('../image/mainMenu/dining-table.png')} />
        </TouchableOpacity>   
    )

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8},
    wrapper:{
        flex: 1,
        paddingHorizontal: 8
    }
})

export default MainMenu