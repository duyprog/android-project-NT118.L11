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
        width: 72, 
        height: 72
    },
    containter:{
        alignItems: 'center',
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#FFF',
        elevation: 8,
        marginBottom: 16
    }, 
    title:{
        textTransform: 'uppercase', 
        fontWeight: '700',
        marginBottom: 10,
    }
})