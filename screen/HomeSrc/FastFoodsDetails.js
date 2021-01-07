import React, { Component } from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import {fetchFood} from '../../redux/actions/itemActions';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import FoodItems from '../../items/FoodItems'

class FoodDetails extends Component {
    componentDidMount(){
        this.props.fetchFood();
    }
    render() {
        return (
            <FlatList
                data={this.props.foodItems}
                numColumns={2}
                renderItem={({item}) =>
                <View style={styles.wrapper}>
                    <FoodItems item={item}/>
                </View>}
                keyExtractor={(item) => `${item.ITEM_ID}`}/>
        )
    }
}

FoodDetails.propTypes = { 
    fetchFood: PropTypes.func.isRequired,
    foodItems : PropTypes.array.isRequired
}
const mapStateToProps = state => {
    return{
        foodItems: state.itemReducer.itemData.foodItems
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
export default connect(mapStateToProps, {fetchFood}) (FoodDetails);