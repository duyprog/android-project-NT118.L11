import React, { Component } from 'react'
import {View, StyleSheet, FlatList } from 'react-native'

import StaffListComp from '../../components/StaffListComp'

export default class StaffList extends Component {
    constructor(props){
        super(props)
        this.state = ({
            staffList: [
                {
                    id: 1,
                    name: 'Hoang My Phi hehe',
                    role: 'Ong chu chu j'
                },
                {
                    id: 2,
                    name: 'Duy Pham hehe',
                    role: 'Quan ly chu j'
                },
                {
                    id: 3,
                    name: 'Chung tin',
                    role: 'Culi vnutour'
                },
                {
                    id: 4,
                    name: 'May du hai chau',
                    role: 'an chua'
                }
            ]
        })
    }

    render() {
        const staffList = this.state
        return (
            <FlatList
                data={staffList}
                renderItem={({item}) =>
                    <StaffListComp staff={item} />}
                keyExtractor={(item) => `${item.id}`} >
            </FlatList>
        )
    }
}
