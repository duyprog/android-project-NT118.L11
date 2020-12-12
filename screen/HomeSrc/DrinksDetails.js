import React, { Component } from 'react'
import { View, StyleSheet, FlatList} from 'react-native'

import DrinkItems from '../../items/DrinkItems'

export default class DrinkDetails extends Component {
    constructor(props){
        super(props);
        this.state =({
            drinkItems: [
                {
                    id: 1,
                    images:[
                        {
                            url: 'https://product.hstatic.net/1000075078/product/tra_buoi_5c4c5ce2d4e44042a069ec9011ef1a9f_large.jpg'
                        }
                    ],
                    name: 'Trà oolong mật ong',
                    price: 50000,
                },
                {
                    id: 2,
                    images: [
                        {
                            url: 'https://product.hstatic.net/1000075078/product/macca_d56d5ab8dde4455aa7f19d29b5fff763_large.jpg'
                        }
                        
                    ],
                    name: 'Trà sữa mắc ca',
                    price: 45000,
                },
                {
                    id: 3,
                    images: [
                        {
                            url: 'https://product.hstatic.net/1000075078/product/tra_den_macchiato_789c1d7590a24dce8dd0a412ae03a7fd_large.jpg'
                        }
                        
                    ],
                    name: 'Trà đen Machiato',
                    price: 42000,
                },
                {
                    id: 4,
                    images: [
                        {
                            url: 'https://product.hstatic.net/1000075078/product/tra_dao_5f3925d9bfca4d0abc17f95b05fff5f7_large.jpg'
                        }
                        
                    ],
                    name: 'Trà đào cam sả',
                    price: 55000,
                },
                {
                    id: 5,
                    images: [
                        {
                            url: 'https://product.hstatic.net/1000075078/product/cam_pbt_da_xay_27dc80ef2efb4828885c2be429aa42fa_large.jpg'
                        }
                        
                    ],
                    name: 'Phúc bồn tử cam',
                    price: 55000,
                },
                {
                    id: 6,
                    images: [
                        {
                            url: 'https://product.hstatic.net/1000075078/product/cf_da_xay_c062933b9a044c5f9b6370a34e2d2216_large.jpg'
                        }
                        
                    ],
                    name: 'Cà phê đá xay',
                    price: 59000,
                },
                {
                    id: 7,
                    images: [
                        {
                            url: 'https://product.hstatic.net/1000075078/product/sinh_to_cam_xoai_c3cfa1beec0d4e49b0b229104cbfe412_large.jpg'
                        }
                        
                    ],
                    name: 'Sinh tố cam xoài',
                    price: 59000,
                },
                {
                    id: 8,
                    images: [
                        {
                            url: 'https://product.hstatic.net/1000075078/product/sinh-to-viet-quoc_bd95abd5bf84451e8ee0c8cef031432c_large.jpg'
                        }
                        
                    ],
                    name: 'Sinh tố việt quất',
                    price: 59000,
                },
            ]
        });
    }
    render() {
        return (
            <FlatList
                data={this.state.drinkItems}
                numColumns={2}
                renderItem={({item}) =>
                <View style={styles.wrapper}>
                    <DrinkItems drinkItem={item}/>
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