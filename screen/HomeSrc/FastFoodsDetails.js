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
                    price: 299000,
                },
                {
                    id: 2,
                    images: [
                        {
                            url: 'https://img-global.cpcdn.com/recipes/39ca2c2a0e1fb011/751x532cq70/mi-y-s%E1%BB%91t-bo-bam-spaghetti-bolognese-recipe-main-photo.jpg'
                        }
                        
                    ],
                    name: 'Spaghetti',
                    price: 129000,
                },
                {
                    id: 3,
                    images: [
                        {
                            url: 'https://abrooklynpizzeria.com/wp-content/uploads/2018/05/SFS_GreekSalad_02_279554-600x600.jpg'
                        }
                        
                    ],
                    name: 'Salad',
                    price: 69000,
                },
                {
                    id: 4,
                    images: [
                        {
                            url: 'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png'
                        }
                        
                    ],
                    name: 'Pizza',
                    price: 239000,
                },
                {
                    id: 5,
                    images: [
                        {
                            url: 'https://gcs.thesouthafrican.com/2020/04/b25c2198-kfc.jpeg'
                        }
                        
                    ],
                    name: 'Gà rán',
                    price: 99000,
                },
                {
                    id: 6,
                    images: [
                        {
                            url: 'https://i.pinimg.com/564x/22/16/f1/2216f1f01372b07929c76e14f8a18b47.jpg'
                        }
                        
                    ],
                    name: 'Nem rán',
                    price: 99000,
                },
                {
                    id: 7,
                    images: [
                        {
                            url: 'https://www.delonghi.com/Global/recipes/multifry/patatine_fritte.jpg'
                        }
                        
                    ],
                    name: 'Khoai tây chiên',
                    price: 69000,
                },
                {
                    id: 8,
                    images: [
                        {
                            url: 'https://www.thespruceeats.com/thmb/O8cBOSCu3233XKmts7kPiT-52F4=/1685x1264/smart/filters:no_upscale()/air-fryer-hot-dogs-4802499-07-b327e219937c429a81efaf61519724a5.jpg'
                        }
                        
                    ],
                    name: 'Hot dogs',
                    price: 69000,
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
        paddingHorizontal: 8,
        marginTop: 5
    }
})
