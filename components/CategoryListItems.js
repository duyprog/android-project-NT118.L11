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
        width: 78, 
        height: 78,
        marginLeft: 10
    },
    containter:{
        alignItems: 'center',
        padding: 14,
        borderRadius: 6,
        backgroundColor: '#FFF',
        elevation: 5,
        marginBottom: 14,
        flexDirection: 'row'
    }, 
    title:{
        textTransform: 'uppercase', 
        fontWeight: '700',
        alignSelf: 'center',
        fontSize: 18,
        marginLeft: 20
    }
})