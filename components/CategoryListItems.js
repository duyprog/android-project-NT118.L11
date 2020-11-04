import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class CategoryListItems extends Component {
    render() {
        return (
            <View style={styles.containter}>
                <Text style={styles.title}> {this.props.title} </Text>
                <Image style={styles.CategoryImage} source={this.props.uri}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    CategoryImage:{
        width: 64, 
        height: 64
    },
    containter:{
        alignItems: 'center',
        justifyContent: 'center',
       padding: 16,
        backgroundColor: 'tomato',
       shadowColor: '#000',
       shadowOpacity: 0.1,
       shadowRadius: 10,
       shadowOffset: {width: 0, height: 0},
       marginBottom: 10,
    }, 
    title:{
        fontSize: 16, 
        fontWeight: '600',
        marginBottom: 10,
    }
})