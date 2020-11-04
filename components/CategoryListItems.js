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
        width: 78, 
        height: 78
    },
    containter:{
        alignItems: 'center',
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#FFF',
        elevation: 5,
        marginBottom: 14
    }, 
    title:{
        textTransform: 'uppercase', 
        fontWeight: '700',
        marginBottom: 10,
    }
})