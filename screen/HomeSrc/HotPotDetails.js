import React, { Component } from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import {connect} from 'react-redux';
import {fetchHotpot} from '../../redux/actions/itemActions';
import PropTypes from 'prop-types';
import HotpotItems from '../../items/HotpotItems'

class HotPotDetails extends Component {
    // constructor(props){
    //     super(props);
    //     this.state =({
    //         hotpotItems: [
    //             {
    //                 id: 1,
    //                 images:[
    //                     {
    //                         url: 'https://salt.tikicdn.com/ts/tmp/33/70/69/8fa6ee7dcc31b1685699cd260d3e6de4.jpg'
    //                     }
    //                 ],
    //                 name: 'Lẩu thái thịt bò 2 ngăn',
    //                 price: 449000,
    //             },
    //             {
    //                 id: 2,
    //                 images: [
    //                     {
    //                         url: 'https://www.misstamchiak.com/wp-content/uploads/2017/01/P1030395-1300x867.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Lẩu thái hải sản chua cay',
    //                 price: 449000,
    //             },
    //             {
    //                 id: 3,
    //                 images: [
    //                     {
    //                         url: 'https://songkhoe.medplus.vn/wp-content/uploads/2020/03/cach-lam-lau-bo-chua-cay-thom-ngon-den-giot-cuoi-cung.png'
    //                     }
                        
    //                 ],
    //                 name: 'Lẩu nấm thịt bò',
    //                 price: 449000,
    //             },
    //             {
    //                 id: 4,
    //                 images: [
    //                     {
    //                         url: 'https://media.phunutoday.vn/files/content/2020/01/09/an-lau-1641.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Lẩu thập cẩm',
    //                 price: 489000,
    //             }
    //         ]
    //     });
    // }
   componentDidMount(){
       this.props.fetchHotpot();
   }
    render() {
        return (
            <FlatList
                data={this.props.hotpotItems}
                renderItem={({item}) =>
                <View style={styles.wrapper}>
                    <HotpotItems hotpotItem={item}/>
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