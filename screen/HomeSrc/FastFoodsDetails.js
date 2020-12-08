import React, { Component } from 'react'
import { View, StyleSheet, FlatList} from 'react-native'

import FoodItems from '../../items/FoodItems'

export default class FastFoodsDetails extends Component {
    constructor(props){
        super(props);
        this.state =({
            foodItems: [
                {
                    id: 1,
                    images:[
                        {
                            url: 'https://www.thucphamsachhd.com/uploads/files/2017/10/03/Steak-meat-34450442-1302-1020.jpg'
                        }
                    ],
                    name: 'Beef steak',
                    price: '300000đ',
                },
                {
                    id: 2,
                    images: [
                        {
                            url: 'https://img-global.cpcdn.com/recipes/39ca2c2a0e1fb011/751x532cq70/mi-y-s%E1%BB%91t-bo-bam-spaghetti-bolognese-recipe-main-photo.jpg'
                        }
                        
                    ],
                    name: 'Spaghetti',
                    price: '120000đ',
                },
                {
                    id: 3,
                    images: [
                        {
                            url: 'https://abrooklynpizzeria.com/wp-content/uploads/2018/05/SFS_GreekSalad_02_279554-600x600.jpg'
                        }
                        
                    ],
                    name: 'Salad',
                    price: '70000đ',
                },
                {
                    id: 4,
                    images: [
                        {
                            url: 'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png'
                        }
                        
                    ],
                    name: 'Pizza',
                    price: '240000đ',
                },
            ]
        });
    }
    render() {
        return (
            <FlatList
                data={this.state.foodItems}
                numColumns={2}
                renderItem={({item}) =>
                <View style={styles.wrapper}>
                    <FoodItems foodItem={item}/>
                </View>}
                keyExtractor={(item) => `${item.id}`}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8},
    wrapper:{
        flex: 1,
        paddingHorizontal: 8
    }
})
