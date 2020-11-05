import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

export default function StaffListComp(props) {
    const {staff} = props

    return (
        <Card>
            <View style={styles.cardView}>
                <Image 
                    style={styles.imageStyle}
                    source={{uri: require('../image/staff-avatar.png')}} >
                </Image>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 18}}> {staff.name} </Text>
                    <Text style={{fontSize: 14}}> {staff.role} </Text>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    staffCard: {
        margin: 5
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    cardView: {
        flexDirection: 'row',
        padding: 6
    }
}) 