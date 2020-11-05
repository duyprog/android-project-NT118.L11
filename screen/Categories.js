import React from 'react'
import { StyleSheet, TouchableOpacity} from 'react-native'
import CategoryListItems from '../components/CategoryListItems'
import { ScrollView } from 'react-native-gesture-handler';

const Categories = ({navigation}) => {
        return (
            <View>
                <ScrollView style={styles.container}>
                    <TouchableOpacity 
                        activeOpacity={0.5}
                        onPress={()=>{
                            navigation.navigate('Fast Foods Details')
                        }}
                    ><CategoryListItems title={"Thức ăn nhanh"} uri={require('../image/fast-food.png')}/></TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() =>{
                            navigation.navigate('Hot Pot Details');
                        }}
                    ><CategoryListItems title={"Lẩu"} uri={require('../image/hot-pot.png')}/></TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() =>{
                            navigation.navigate('Fried Details');
                        }}
                    ><CategoryListItems title={"Món chiên"} uri={require('../image/fried.png')}/></TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() =>{
                            navigation.navigate('Drinks Details');
                        }}
                    ><CategoryListItems title={"Thức uống"} uri={require('../image/coke.png')}/></TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() =>{
                            navigation.navigate('Desserts Details');
                        }}
                    ><CategoryListItems title={"Tráng miệng"} uri={require('../image/dessert.png')}/></TouchableOpacity>
            </ScrollView>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1, 
        paddingLeft: 16, 
        paddingRight: 16,

    }
})

export default Categories;