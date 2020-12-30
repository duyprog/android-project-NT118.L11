import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class CategoryListItems extends Component {
    render() {
        return (
            <View style={styles.containter}>
                <Image style={styles.CategoryImage} source={this.props.uri}/>
                <Text style={styles.title}> {this.props.title} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    CategoryImage:{
        width: 70,
        height: 70
    },
    containter:{
        alignSelf: 'center',
        padding: 16,
        marginLeft: 10,
        marginRight: 10
    }, 
    title:{
        alignSelf: 'center',
        fontSize: 16,
        color: '#000',
        marginTop: 5
    }
})