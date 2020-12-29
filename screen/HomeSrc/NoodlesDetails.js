import React, { Component } from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import {fetchNoodle} from '../../redux/actions/itemActions';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import NoodleItems from '../../items/NoodleItems'

export class NoodleDetails extends Component {
    // constructor(props){
    //     super(props);
    //     this.state =({
    //         noodleItems: [
    //             {
    //                 id: 1,
    //                 images:[
    //                     {
    //                         url: 'https://image.thanhnien.vn/980/uploaded/congthang/2019_10_09/anh_1_dzzf.jpg'
    //                     }
    //                 ],
    //                 name: 'Bún bò Huế',
    //                 price: 99000,
    //             },
    //             {
    //                 id: 2,
    //                 images: [
    //                     {
    //                         url: 'https://vyctravel.com/libs/upload/ckfinder/images/H%C3%A0%20N%E1%BB%99i/pho%20bo%20ha%20noi.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Phở Hà Nội',
    //                 price: 99000,
    //             },
    //             {
    //                 id: 3,
    //                 images: [
    //                     {
    //                         url: 'https://daynauan.info.vn/wp-content/uploads/2019/05/cach-nau-hu-tieu-nam-vang-campuchia.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Hủ tíu Nam Vang',
    //                 price: 99000,
    //             },
    //             {
    //                 id: 4,
    //                 images: [
    //                     {
    //                         url: 'https://daynauan.info.vn/wp-content/uploads/2020/04/bun-thai.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Bún Thái',
    //                 price: 99000,
    //             },
    //             {
    //                 id: 5,
    //                 images: [
    //                     {
    //                         url: 'https://thucthan.com/media/2019/07/bun-rieu-cua/bun-rieu-cua.png'
    //                     }
                        
    //                 ],
    //                 name: 'Bún riêu cua',
    //                 price: 99000,
    //             },
    //             {
    //                 id: 6,
    //                 images: [
    //                     {
    //                         url: 'https://resortdanang.info/wp-content/uploads/2019/03/add-1024x768.jpg'
    //                     }
                        
    //                 ],
    //                 name: 'Mì Quảng gà',
    //                 price: 99000,
    //             }
    //         ]
    //     });
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