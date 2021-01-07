import React, { Component } from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import {connect} from 'react-redux';
import {fetchHotpot} from '../../redux/actions/itemActions';
import PropTypes from 'prop-types';
import HotpotItems from '../../items/HotpotItems'

class HotPotDetails extends Component {
   componentDidMount(){
       this.props.fetchHotpot();
   }
    render() {
        return (
            <FlatList
                data={this.props.hotpotItems}
                renderItem={({item}) =>
                <View style={styles.wrapper}>
<<<<<<< HEAD
                    <HotpotItems item={item}/>
=======
                    <HotpotItems hotpotItem={item}/>
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
                </View>}
                keyExtractor={(item) => `${item.ITEM_ID}`}/>
        )
    }
}
HotPotDetails.propsTypes ={
    fetchHotpot: PropTypes.func.isRequired,
    hotpotItems: PropTypes.array.isRequired
}

const mapStateToProps = state =>{
    return {
        hotpotItems : state.itemReducer.itemData.hotpotItems
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

export default connect(mapStateToProps, {fetchHotpot})(HotPotDetails);