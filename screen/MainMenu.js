import React from 'react'
import { View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'

import CategoryListItems from '../components/CategoryListItems'

const MainMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flex: 1, 
        paddingLeft: 10, 
        paddingRight: 10,
        elevation: 5
    }
})

export default MainMenu