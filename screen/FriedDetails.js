import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList} from 'react-native'

export default class FriedDetails extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View><Text>Drink Details hehe </Text></View> 
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