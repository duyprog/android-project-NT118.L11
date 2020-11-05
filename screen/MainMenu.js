import React from 'react'
import { View, TouchableOpacity} from 'react-native'

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
        </View>
    )
}

export default MainMenu