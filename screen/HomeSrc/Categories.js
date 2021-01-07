import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import CategoryListItems from '../../components/CategoryListItems'
import {connect} from 'react-redux'; 
import {updateTotalPrice} from '../../redux/actions/receiptActions';
import {fetchTotalPriceById, insertTakeAwayReceipt} from '../../redux/actions/receiptActions';
import {fetchCurrentCustomer} from '../../redux/actions/customerActions'

const Categories = ({navigation, updateTotalPrice, fetchTotalPriceById, currentReceiptID, currentCustomerId, fetchCurrentCustomer, isAtStore}) => {
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
    )
}

const styles = StyleSheet.create({
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
    orderBtn: {
        backgroundColor: '#de5543',
        borderRadius: 20,
        height: 40,
        width: 200,
        alignItems: 'center', 
        elevation: 8
    },
    orderText: {
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 8,
        color: '#fff',
        fontSize: 17
    },
});
const mapStateToProps = (state) => {
    return {
        currentReceiptID: state.receiptDetailReducer.receiptDetailData.currentReceiptID,
        currentCustomerId: state.customerReducer.customerData.currentCustomerId, 
        isAtStore: state.customerReducer.customerData.isAtStore
    }
}
export default connect(mapStateToProps, {updateTotalPrice, fetchTotalPriceById, fetchCurrentCustomer, insertTakeAwayReceipt}) (Categories)
