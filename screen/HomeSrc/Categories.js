import React from 'react'
import { View, StyleSheet, TouchableOpacity} from 'react-native'
import CategoryListItems from '../../components/CategoryListItems'
import { ScrollView } from 'react-native-gesture-handler';

const Categories = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity 
                activeOpacity={0.5}
                onPress={()=>{
                    navigation.navigate('Fast Foods Details')
                }}>
                <CategoryListItems 
                    title={"Thức ăn nhanh"} 
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

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>{
                    navigation.navigate('Fried Details');
                }}>
                <CategoryListItems 
                    title={"Món chiên xào"} 
                    uri={require('../../image/foodMenu/fried.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>{
                    navigation.navigate('Noodles Details');
                }}>
                <CategoryListItems 
                    title={"Món nước"} 
                    uri={require('../../image/foodMenu/noodles.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>{
                    navigation.navigate('Drinks Details');
                }}>
                <CategoryListItems 
                    title={"Thức uống"} 
                    uri={require('../../image/foodMenu/coke.png')}/>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>{
                    navigation.navigate('Desserts Details');
                }}>
                <CategoryListItems 
                    title={"Tráng miệng"} 
                    uri={require('../../image/foodMenu/dessert.png')}/>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1, 
        paddingLeft: 10, 
        paddingRight: 10,
    },
    viewStyle: {
        flexDirection: 'row'
    }
})

export default Categories