import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList} from 'react-native'
export default class DessertsDetails extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View><Text>Cake Hehe</Text></View>
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