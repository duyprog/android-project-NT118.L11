import React from 'react'
import { TouchableOpacity, StyleSheet, ScrollView} from 'react-native'

import CategoryListItems from '../components/CategoryListItems'

const MainMenu = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flex: 1, 
        paddingLeft: 10, 
        paddingRight: 10,
    }
})

export default MainMenu