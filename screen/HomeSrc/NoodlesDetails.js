import React, { Component } from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import {fetchNoodle} from '../../redux/actions/itemActions';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import NoodleItems from '../../items/NoodleItems'

export class NoodleDetails extends Component {
    componentDidMount(){
        this.props.fetchNoodle();
        console.log(this.props.noodleItems);
    }
    render() {
        return (
            <FlatList
                data={this.props.noodleItems}
                numColumns={2}
                renderItem={({item}) =>
                <View style={styles.wrapper}>
                    <NoodleItems noodleItem={item}/>
                </View>}
                keyExtractor={(item) => `${item.ITEM_ID}`}/>
        )
    }
}

NoodleDetails.propsTypes = { 
    fetchNoodle: PropTypes.func.isRequired,
    noodleItems : PropTypes.array.isRequired
}
const mapStateToProps = state => {
    return{
        noodleItems: state.itemReducer.itemData.noodleItems
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

export default connect(mapStateToProps, {fetchNoodle}) (NoodleDetails);