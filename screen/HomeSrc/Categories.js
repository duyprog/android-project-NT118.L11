import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import CategoryListItems from '../../components/CategoryListItems'
<<<<<<< HEAD
import {connect} from 'react-redux'; 
import {updateTotalPrice} from '../../redux/actions/receiptActions';
import {fetchTotalPriceById} from '../../redux/actions/receiptActions';
const Categories = ({navigation, updateTotalPrice, fetchTotalPriceById, currentReceiptID}) => {
    return (
        <View>
            <View style={styles.mainView}>
                <View style={styles.view}>
                    <TouchableOpacity 
                        activeOpacity={0.5}
                        onPress={()=>{
                            navigation.navigate('Fast Foods Details');
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
                <View style={styles.viewz}>
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
            </View>
            <View style={{alignItems: 'center', marginTop: 5}}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() =>{
                            navigation.navigate('Confirm');
                            updateTotalPrice();
                            fetchTotalPriceById(currentReceiptID);
                        }}>
                        <View style={styles.orderBtn}>
                            <Text style={styles.orderText}> Kiểm tra </Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </View>
=======
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
                        <Text style={styles.orderText}> Kiểm tra </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
    )
}

const styles = StyleSheet.create({
<<<<<<< HEAD
    mainView:{
        backgroundColor: "#fff",
        alignSelf: 'center',
        width: 320,
        margin: 10, 
        borderRadius: 10,
        elevation: 8
    },
    view: {
        flexDirection: 'row', 
        alignSelf: 'center', 
        borderBottomColor: '#d4d4d4',
        borderBottomWidth: 1,
    },
    viewz: {
        flexDirection: 'row', 
        alignSelf: 'center'
    },
=======
    view: {
        flexDirection: 'row', 
        alignSelf: 'center', 
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
    orderBtn: {
        backgroundColor: '#de5543',
        borderRadius: 20,
        height: 40,
<<<<<<< HEAD
        width: 200,
        alignItems: 'center', 
        elevation: 8
    },
    orderText: {
=======
        width: 130,
        alignItems: 'center'
    },
    orderText: {
        textTransform: 'uppercase',
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 8,
        color: '#fff',
        fontSize: 17
    },
<<<<<<< HEAD
});
const mapStateToProps = (state) => {
    return {
        currentReceiptID: state.receiptDetailReducer.receiptDetailData.currentReceiptID,
    }
}
export default connect(mapStateToProps, {updateTotalPrice, fetchTotalPriceById}) (Categories)
=======
})
export default Categories
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
