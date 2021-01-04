import React, { Component } from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import {fetchDessert} from '../../redux/actions/itemActions';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import DessertItems from '../../items/DessertItems'

 class DessertDetails extends Component {
    // constructor(props){
    //     super(props);
    //     this.state =({
    //         dessertItems: [
    //             {
    //                 id: 1,
    //                 images:[
    //                     {
    //                         url: 'https://product.hstatic.net/1000075078/product/mochi-mango_7575626c13c841df910ff9ef5ecd4f24_large.jpg'
    //                     }
    //                 ],
    //                 name: 'Mochi kem xoài',
    //                 price: 19000,
    //             },
    //             {
    //                 id: 2,
    //                 images: [
    //                     {
    //                         url: 'https://product.hstatic.net/1000075078/product/mochi-chocolate_24bddab1f9c64658a4052480e5e4f1ba_large.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Mochi kem chocolate',
    //                 price: 19000,
    //             },
    //             {
    //                 id: 3,
    //                 images: [
    //                     {
    //                         url: 'https://product.hstatic.net/1000075078/product/chanhday_1x1_da85397059a149e1b886237434f7ce48_large.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Mousse Passion',
    //                 price: 25000,
    //             },
    //             {
    //                 id: 4,
    //                 images: [
    //                     {
    //                         url: 'https://product.hstatic.net/1000075078/product/photo_2020-11-10_17-41-51_6c3b1ba948354101b892644fb7aab5c6_large.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Croissant trứng muối',
    //                 price: 35000,
    //             },
    //             {
    //                 id: 5,
    //                 images: [
    //                     {
    //                         url: 'https://product.hstatic.net/1000075078/product/trungmui1_9abf7c43946b44e9948dbac1eff95e40_large.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Bông lan trứng muối',
    //                 price: 29000,
    //             },
    //             {
    //                 id: 6,
    //                 images: [
    //                     {
    //                         url: 'https://product.hstatic.net/1000075078/product/phomaichabong_1x1_bed88825466e4e53bde516ce1febdb56_large.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Bánh mì chà bông',
    //                 price: 35000,
    //             },
    //             {
    //                 id: 7,
    //                 images: [
    //                     {
    //                         url: 'https://product.hstatic.net/1000075078/product/mit_say_2f0c836695ce40bd904930fc175c4287_large.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Mít sấy',
    //                 price: 20000,
    //             },
    //             {
    //                 id: 8,
    //                 images: [
    //                     {
    //                         url: 'https://product.hstatic.net/1000075078/product/hat-dieu-mat-ong_472628eb00474362b4d2f9acbcb4d879_large.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Điều vàng mật ong',
    //                 price: 30000,
    //             },
    //         ]
    //     });
    // }
    componentDidMount(){
        this.props.fetchDessert();
        console.log(this.props.dessertItems);
    }
    render() {
        return (
            <FlatList
                data={this.props.dessertItems}
                numColumns={2}
                renderItem={({item}) =>
                <View style={styles.wrapper}>
                    <DessertItems dessertItem={item}/>
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