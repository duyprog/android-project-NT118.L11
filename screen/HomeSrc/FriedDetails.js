import React, { Component } from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import {connect} from 'react-redux';
import {fetchFried} from '../../redux/actions/itemActions';
import PropTypes from 'prop-types';
import FriedItems from '../../items/FriedItems'
class FriedDetails extends Component {
<<<<<<< HEAD
    componentDidMount(){
        this.props.fetchFried();
=======
    // constructor(props){
    //     super(props);
    //     this.state =({
    //         friedItems: [
    //             {
    //                 id: 1,
    //                 images:[
    //                     {
    //                         url: 'https://image.cooky.vn/recipe/g3/25753/s640/recipe-cover-r25753.jpg'
    //                     }
    //                 ],
    //                 name: 'Gà chiên nước mắm',
    //                 price: 129000,
    //             },
    //             {
    //                 id: 2,
    //                 images: [
    //                     {
    //                         url: 'https://shipdoandemff.com/wp-content/uploads/2017/06/com-chien-hai-san-nha-hang-shipdoandemFF.png'
    //                     }
                        
    //                 ],
    //                 name: 'Cơm chiên hải sản',
    //                 price: 89000,
    //             },
    //             {
    //                 id: 3,
    //                 images: [
    //                     {
    //                         url: 'https://nghebep.com/wp-content/uploads/2017/10/mon-mi-xao-bo.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Mì xào thịt bò',
    //                 price: 89000,
    //             },
    //             {
    //                 id: 4,
    //                 images: [
    //                     {
    //                         url: 'https://cdn.daynauan.info.vn/wp-content/uploads/2019/03/nui-xao-bo.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Nui xào bò',
    //                 price: 89000,
    //             },
    //             {
    //                 id: 5,
    //                 images: [
    //                     {
    //                         url: 'https://tourane.vn/wp-content/uploads/2017/11/cach-lam-bo-luc-lac.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Bò lúc lắc',
    //                 price: 89000,
    //             },
    //             {
    //                 id: 6,
    //                 images: [
    //                     {
    //                         url: 'https://netspace.edu.vn/upload/images/2017/04/08/mi-xao-1.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Mì xào giòn hải sản',
    //                 price: 89000,
    //             }
    //         ]
    //     });
    // }
    componentDidMount(){
        this.props.fetchFried();
        console.log(this.props.friedItems);
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
    }
    render() {
        return (
            <FlatList
                data={this.props.friedItems}
                numColumns={2}
                renderItem={({item}) =>
                <View style={styles.wrapper}>
<<<<<<< HEAD
                    <FriedItems item={item}/>
=======
                    <FriedItems friedItem={item}/>
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
                </View>}
                keyExtractor={(item) => `${item.ITEM_ID}`}/>
        )
    }
}
<<<<<<< HEAD

=======
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
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