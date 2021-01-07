import React, { Component } from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import {fetchDrink} from '../../redux/actions/itemActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DrinkItems from '../../items/DrinkItems'
class DrinkDetails extends Component {
    componentDidMount(){
        this.props.fetchDrink();
        console.log(this.props.drinkItems);
    }
    render() {
        return (
            <FlatList
                data={this.props.drinkItems}
                numColumns={2}
                renderItem={({item}) =>
                <View style={styles.wrapper}>
                    <DrinkItems item={item}/>
                </View>}
                keyExtractor={(item) => `${item.ITEM_ID}`}/>
        )
    }
}

DrinkDetails.propTypes = {
    fetchDrink: PropTypes.func.isRequired,
    drinkItems: PropTypes.array.isRequired
}
const mapStateToProps = state => {
    return {
        drinkItems: state.itemReducer.itemData.drinkItems
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

export default connect(mapStateToProps, {fetchDrink}) (DrinkDetails);