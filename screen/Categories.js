import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import CategoryListItems from '../components/CategoryListItems'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
const Categories = ({navigation}) => {
        return (
            
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('Food Details')
                    }}
                ><CategoryListItems title={"Foods"} uri={require('../image/dish.png')}/></TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>{
                        navigation.navigate('Drink Details');
                    }}
                ><CategoryListItems title={"Drinks"} uri={require('../image/coffee-cup.png')}/></TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>{
                        navigation.navigate('Cake Details');
                    }}
                ><CategoryListItems title={"Cakes"} uri={require('../image/cake.png')}/></TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1, 
        alignItems: 'stretch', 
        justifyContent: 'center',
        paddingLeft: 16, 
        paddingRight: 16,

    }
})

export default Categories;