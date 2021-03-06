import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Modal } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
import AtStore from '../image/mainMenu/dining-table.png'
import Takeaway from '../image/mainMenu/take-away.png'
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types';
import {insertTakeAwayReceipt} from '../redux/actions/receiptActions';
import {customerChooseAtStore, customerChoosePickup} from '../redux/actions/customerActions';
const MainMenu = ({ navigation, customerChooseAtStore, customerChoosePickup, insertTakeAwayReceipt}) => {
    return (
        <ScrollView>
            <View style={styles.sliderContainer}>
                <Swiper 
                    height={200}
                    autoplay={true}
                    horizontal={true}
                    activeDotColor='#de5543'
                    autoplayTimeout={3}>
                    <View style={styles.slide}>
                        <Image
                            source={{uri:'https://www.helpguide.org/wp-content/uploads/fast-foods-candy-cookies-pastries-768.jpg'}}
                            resizeMode="cover"
                            style={styles.sliderImage} />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={{uri:'https://llv.edu.vn/media/2018/01/fef92b31aa597167a112c932f2777db7941a79d3.jpeg'}}
                            resizeMode="cover"
                            style={styles.sliderImage} />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={{uri:'https://duyendangvietnam.net.vn/public/uploads/files/trung%20quoc.png'}}
                            resizeMode="cover"
                            style={styles.sliderImage} />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={{uri:'http://vietworld.world/Userfiles/Upload/images/ph%e1%bb%9f%20vi%e1%bb%87t.jpg'}}
                            resizeMode="cover"
                            style={styles.sliderImage} />
                    </View>
                </Swiper>
            </View>
            <View style={styles.option}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Info');
                        customerChooseAtStore();
                    }}>
                    <View  style={styles.viewStyle}>
                        <View>
                            <Image source={ AtStore }
                                style={styles.imageView} />
                        </View>
                        <Text style={styles.text}> T???i ch??? </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={ () => {
                        insertTakeAwayReceipt();
                        navigation.navigate('Food Menu');
                        customerChoosePickup();
                    }}>
                    <View  style={styles.viewStyle}>
                        <View>
                            <Image source={ Takeaway }
                                style={styles.imageView} />
                        </View>
                        <Text style={styles.text}> Mang ??i </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsWrapper}>
                <Text style={styles.textInfo}> Chi nh??nh kh??c </Text>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image source={{uri: 'http://manwah.ggg.com.vn/wp-content/uploads/sites/22/2019/01/Photo12-12-18121455PM.jpg'}}
                                style={styles.cardImg}
                                resizeMode="cover" />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}> Lotte Center Hanoi </Text>
                        <Text style={styles.cardDetails}> 54 Li???u Giai, Qu???n Ba ????nh, H?? N???i </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image source={{uri: 'https://images.foody.vn/res/g105/1043688/prof/s576x330/foody-upload-api-foody-mobile-106805830_1363912081-200824111010.jpg'}}
                                style={styles.cardImg}
                                resizeMode="cover" />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}> Vincom ?????ng Kh???i </Text>
                        <Text style={styles.cardDetails}> 72 L?? Th??nh T??n, Ph?????ng B???n Ngh??, Qu???n 1, Tp. H??? Ch?? Minh </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image source={{uri: 'https://images.foody.vn/res/g89/882901/prof/s576x330/foody-upload-api-foody-mobile-125728c85048b316ea59-190118120109.jpg'}}
                                style={styles.cardImg}
                                resizeMode="cover" />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}> Cao Th???ng Mall </Text>
                        <Text style={styles.cardDetails}> 19 Cao Th???ng, Ph?????ng 2, Qu???n 3, Tp. H??? Ch?? Minh </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image source={{uri: 'https://images.foody.vn/res/g93/925838/prof/s576x330/foody-upload-api-foody-mobile-hj-190603144144.jpg'}}
                                style={styles.cardImg}
                                resizeMode="cover" />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}> Vincom Qu???n 9 </Text>
                        <Text style={styles.cardDetails}> 50 L?? V??n Vi???t, Qu???n 9, Tp. H??? Ch?? Minh </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image source={{uri: 'https://images.foody.vn/res/g88/872281/prof/s576x330/foody-upload-api-foody-mobile-foody-upload-api-foo-181226181839.jpg'}}
                                style={styles.cardImg}
                                resizeMode="cover" />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}> Becamex Tower G?? ?????u </Text>
                        <Text style={styles.cardDetails}> 167 ???????ng 30/4, Ph?????ng Ph?? Th???, Th??nh ph??? Th??? D???u M???t, B??nh D????ng </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: "#fff",
        marginTop: 15,
        borderRadius: 10,
        elevation: 8
    },
    viewStyle: {
        alignSelf: 'center',
        padding: 16,
        marginLeft: 10,
        marginRight: 10
    },
    imageView: {
        width: 70,
        height: 70
    },
    text: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#000',
        marginTop: 5
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        borderRadius: 8
    },
    textInfo: {
        fontSize: 20,
        fontWeight: "700",
        alignSelf: 'center'
    },
    cardsWrapper: {
        marginTop: 10,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        elevation: 8,
    },
    cardImgWrapper: {
        flex: 1,
        elevation: 8
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
        elevation: 5
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 17
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    }
})

export default connect(null, {customerChooseAtStore, customerChoosePickup, insertTakeAwayReceipt}) (MainMenu);
