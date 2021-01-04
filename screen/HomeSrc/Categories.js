import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import CategoryListItems from '../../components/CategoryListItems'
import { ScrollView } from 'react-native-gesture-handler';

import {useStore} from 'react-redux';
const Categories = ({navigation}) => {
    const store = useStore();
    return (
        <ScrollView>
            <View style={styles.view}>
                <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={()=>{
                        navigation.navigate('Fast Foods Details');
                        console.log(store.getState());
                    }}>
                    <CategoryListItems 
                        title={"Fastfood"} 
                        uri={require('../../image/foodMenu/fast-food.png')}/>
                </TouchableOpacity>
            
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() =>{
                        navigation.navigate('Hot Pot Details');
                    }}>
                    <CategoryListItems 
                        title={"Lẩu"} 
                        uri={require('../../image/foodMenu/hot-pot.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.view}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() =>{
                        navigation.navigate('Fried Details');
                    }}>
                    <CategoryListItems 
                        title={"Chiên/xào"} 
                        uri={require('../../image/foodMenu/fried.png')}/>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() =>{
                        navigation.navigate('Noodles Details');
                    }}>
                    <CategoryListItems 
                        title={"Nước"} 
                        uri={require('../../image/foodMenu/noodles.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.view}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() =>{
                        navigation.navigate('Drinks Details');
                    }}>
                    <CategoryListItems 
                        title={"Đồ uống"} 
                        uri={require('../../image/foodMenu/coke.png')}/>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() =>{
                        navigation.navigate('Desserts Details');
                    }}>
                    <CategoryListItems 
                        title={"Bánh"} 
                        uri={require('../../image/foodMenu/dessert.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: 15}}>
                <TouchableOpacity
                    activeOpacity={0.5}>
                    <View style={styles.orderBtn}>
                        <Text style={styles.orderText}> Order </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row', 
        alignSelf: 'center', 
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    orderBtn: {
        backgroundColor: '#de5543',
        borderRadius: 20,
        height: 40,
        width: 130,
        alignItems: 'center'
    },
    orderText: {
        textTransform: 'uppercase',
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 8,
        color: '#fff',
        fontSize: 17
    },
})
export default Categories