import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import CategoryListItems from '../components/CategoryListItems'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Categories = ({navigation}) => {
        return (
            
            <View style={styles.container}>
                <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={()=>{
                        navigation.navigate('Fast Food Details')
                    }}
                ><CategoryListItems title={"Fast Foods"} uri={require('../image/fast-food.png')}/></TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() =>{
                        navigation.navigate('Drinks Details');
                    }}
                ><CategoryListItems title={"Drinks"} uri={require('../image/coke.png')}/></TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() =>{
                        navigation.navigate('Desserts Details');
                    }}
                ><CategoryListItems title={"Desserts"} uri={require('../image/dessert.png')}/></TouchableOpacity>
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