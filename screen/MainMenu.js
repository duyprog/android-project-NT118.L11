import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import AtStore from '../image/mainMenu/dining-table.png'
import Takeaway from '../image/mainMenu/take-away.png'

const MainMenu = ({ navigation }) => {
    return (
        <View>
            <View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Select table')
                    }}>
                    <View  style={styles.viewStyle}>
                        <Image source={ AtStore }
                               style={styles.imageView} />
                        <Text style={styles.text}> Tại chỗ </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Food Menu')
                    }}>
                    <View  style={styles.viewStyle}>
                        <Image source={ Takeaway }
                               style={styles.imageView} />
                        <Text style={styles.text}> Mang đi </Text>
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
        width: 78,
        height: 78,
        marginLeft: 10
    },
    text: {
        marginLeft: 20,
        textTransform: 'uppercase', 
        fontWeight: '700',
        alignSelf: 'center',
        fontSize: 18,
    }
})

export default MainMenu
