import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import empty from '../../image/foodMenu/empty-table.png'
import serving from '../../image/foodMenu/serving-table.png'
import male from '../../image/foodMenu/waiter-male.png'
import female from '../../image/foodMenu/waiter-female.png'

const SelectTable = ({ navigation }) => {
    return(
        <View>
            <View style={{backgroundColor: '#fff'}}>
                <View style={styles.staffBorder}>
                    <View style={styles.staffView}>
                        <Image 
                            source={male}
                            style={styles.staff} />
                        <Image 
                            source={female}
                            style={styles.staff} />
                    </View>
                    <View style={{alignSelf: 'center'}}>
                        <Text style={styles.label}> Mời quý khách chọn bàn </Text>
                    </View>
                </View>
            </View>
            <ScrollView style={{marginBottom: 20}}>
                <View style={styles.mainView}>
                    <View style={styles.columnView}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={empty}
                                    style={styles.imageTable} />
                                <Text style={styles.tableLabel}> Bàn 01 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={empty}
                                    style={styles.imageTable} />
                                <Text style={styles.tableLabel}> Bàn 04 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={empty}
                                    style={styles.imageTable} />
                                <Text style={styles.tableLabel}> Bàn 07 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={empty}
                                    style={styles.imageTable} />
                                <Text style={styles.tableLabel}> Bàn 10 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={empty}
                                    style={styles.imageTable} />
                                <Text style={styles.tableLabel}> Bàn 13 </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.columnView}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={empty}
                                    style={styles.imageTable} />
                                <Text> Bàn 02 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={serving}
                                    style={styles.imageTable} />
                                <Text> Bàn 05 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={serving}
                                    style={styles.imageTable} />
                                <Text> Bàn 08 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={serving}
                                    style={styles.imageTable} />
                                <Text> Bàn 11 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={serving}
                                    style={styles.imageTable} />
                                <Text> Bàn 14 </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.columnView}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={empty}
                                    style={styles.imageTable} />
                                <Text> Bàn 03 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={empty}
                                    style={styles.imageTable} />
                                <Text> Bàn 06 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={empty}
                                    style={styles.imageTable} />
                                <Text> Bàn 09 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={empty}
                                    style={styles.imageTable} />
                                <Text> Bàn 12 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                navigation.navigate('Food Menu')
                            }}>
                            <View style={styles.columnItem}>
                                <Image 
                                    source={empty}
                                    style={styles.imageTable} />
                                <Text style={styles.tableLabel}> Bàn 15 </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        marginBottom: 20
    },
    imageTable: {
        height: 90,
        width: 90,
        marginTop: 15
    },
    columnItem: {
        alignItems: 'center'
    },
    columnView: {
        marginTop: 10,
        marginLeft: 30
    },
    staff: {
        height: 100,
        width: 100,
        marginTop: 15
    },
    staffBorder: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 2
    },
    staffView: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    label: {
        fontWeight: '700',
        fontSize: 23,
        color: '#de5543',
        marginBottom: 5,
        marginTop: 5
    },
    tableLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#9c9c9c'
    }
})

export default SelectTable