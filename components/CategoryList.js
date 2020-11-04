import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import CategoryListItems from './CategoryListItems'
import {NavigationContainer} from 'react-navigation'
export default class CategoryList extends Component {
    constructor(props){
        super(props);
        this.state ={
            categories: [
                {id: 1, name: 'Foods', uri : require('../image/dish.png')},
                {id: 2, name: 'Drinks', uri : require('../image/coffee-cup.png')},
                {id: 3, name: 'Cakes', uri: require('../image/cake.png')}
            ]
        };
    }
    render() {
        return (
            <View style={styles.container}>
               <FlatList data={this.state.categories}
               renderItem={({item}) =>
                <TouchableOpacity onPress={() =>{
                    navigation.navigate("Food Details");
                }}>
                    <CategoryListItems category ={item.name} uri ={item.uri}/>
                </TouchableOpacity>}
               keyExtractor= {(item) => item.name}/>
            </View>
        )
    }
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