import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList} from 'react-native'
import { connect } from 'react-redux';
class HotPotDetails extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.randomStaffs);
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
const mapStateToProps = state =>{
    return{
        randomStaffs: state
    };
}
export default connect(mapStateToProps) (HotPotDetails);