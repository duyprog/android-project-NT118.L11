import React, { Component } from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import {fetchDessert} from '../../redux/actions/itemActions';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import DessertItems from '../../items/DessertItems'

 class DessertDetails extends Component {
    componentDidMount(){
        this.props.fetchDessert();
    }
    render() {
        return (
            <FlatList
                data={this.props.dessertItems}
                numColumns={2}
                renderItem={({item}) =>
                <View style={styles.wrapper}>
                    <DessertItems item={item}/>
                </View>}
                keyExtractor={(item) => `${item.ITEM_ID}`}/>
        )
    }
}

DessertDetails.propTypes = { 
    fetchDessert: PropTypes.func.isRequired,
    dessertItems : PropTypes.array.isRequired
}
const mapStateToProps = state => {
    return{
        dessertItems: state.itemReducer.itemData.dessertItems
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8},
    wrapper:{
        flex: 1,
        paddingHorizontal: 8,
        marginTop: 5
    }
})

export default connect(mapStateToProps, {fetchDessert}) (DessertDetails);