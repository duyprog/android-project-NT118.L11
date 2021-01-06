import React, { Component } from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import {connect} from 'react-redux';
import {fetchFried} from '../../redux/actions/itemActions';
import PropTypes from 'prop-types';
import FriedItems from '../../items/FriedItems'
class FriedDetails extends Component {
    componentDidMount(){
        this.props.fetchFried();
        console.log(this.props.friedItems);
    }
    render() {
        return (
            <FlatList
                data={this.props.friedItems}
                numColumns={2}
                renderItem={({item}) =>
                <View style={styles.wrapper}>
                    <FriedItems friedItem={item}/>
                </View>}
                keyExtractor={(item) => `${item.ITEM_ID}`}/>
        )
    }
}
FriedDetails.propsTypes = {
    fetchFried: PropTypes.func.isRequired,
    friedItems: PropTypes.array.isRequired 
};

const mapStateToProps = state =>{
    return{ 
        friedItems: state.itemReducer.itemData.friedItems
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

export default connect(mapStateToProps, {fetchFried}) (FriedDetails);