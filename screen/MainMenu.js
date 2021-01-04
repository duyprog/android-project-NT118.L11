import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
import AtStore from '../image/mainMenu/dining-table.png'
import Takeaway from '../image/mainMenu/take-away.png'

const MainMenu = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.sliderContainer}>
                <Swiper 
                    height={200}
                    autoplay={true}
                    horizontal={false}
                    activeDotColor='#de5543'>
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
                </Swiper>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Select table')
                    }}>
                    <View  style={styles.viewStyle}>
                        <Image source={ AtStore }
                               style={styles.imageView} />
                        <Text style={styles.text}> Tại chỗ </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Food Menu')
                    }}>
                    <View  style={styles.viewStyle}>
                        <Image source={ Takeaway }
                               style={styles.imageView} />
                        <Text style={styles.text}> Mang đi </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsWrapper}>
                <Text style={styles.textInfo}> Chi nhánh khác </Text>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image source={{uri: 'http://manwah.ggg.com.vn/wp-content/uploads/sites/22/2019/01/Photo12-12-18121455PM.jpg'}}
                                style={styles.cardImg}
                                resizeMode="cover" />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}> Lotte Center Hanoi </Text>
                        <Text style={styles.cardDetails}> 54 Liễu Giai, Quận Ba Đình, Hà Nội </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image source={{uri: 'https://images.foody.vn/res/g105/1043688/prof/s576x330/foody-upload-api-foody-mobile-106805830_1363912081-200824111010.jpg'}}
                                style={styles.cardImg}
                                resizeMode="cover" />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}> Vincom Đồng Khởi </Text>
                        <Text style={styles.cardDetails}> 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, Tp. Hồ Chí Minh </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image source={{uri: 'https://images.foody.vn/res/g89/882901/prof/s576x330/foody-upload-api-foody-mobile-125728c85048b316ea59-190118120109.jpg'}}
                                style={styles.cardImg}
                                resizeMode="cover" />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}> Cao Thắng Mall </Text>
                        <Text style={styles.cardDetails}> 19 Cao Thắng, Phường 2, Quận 3, Tp. Hồ Chí Minh </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image source={{uri: 'https://images.foody.vn/res/g93/925838/prof/s576x330/foody-upload-api-foody-mobile-hj-190603144144.jpg'}}
                                style={styles.cardImg}
                                resizeMode="cover" />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}> Vincom Quận 9 </Text>
                        <Text style={styles.cardDetails}> 50 Lê Văn Việt, Quận 9, Tp. Hồ Chí Minh </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image source={{uri: 'https://images.foody.vn/res/g88/872281/prof/s576x330/foody-upload-api-foody-mobile-foody-upload-api-foo-181226181839.jpg'}}
                                style={styles.cardImg}
                                resizeMode="cover" />
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}> Becamex Tower Gò Đậu </Text>
                        <Text style={styles.cardDetails}> 167 đường 30/4, Phường Phú Thọ, Thành phố Thủ Dầu Một, Bình Dương </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
        borderRadius: 8
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
        marginTop: 5,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
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
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 17
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
})

export default MainMenu
