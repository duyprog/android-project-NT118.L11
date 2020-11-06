import React, { Component } from 'react'
import {View, StyleSheet, FlatList, Animated, TouchableOpacity,RefreshControl } from 'react-native'
import Swipable from 'react-native-gesture-handler/Swipeable'
import StaffListComp from '../../components/StaffListComp'
import {getStaffFromServer} from '../../networking/server';
import {deleteAStaff} from '../../networking/server';
export default class StaffList extends Component {
    constructor(props){
        super(props)
        this.state = ({
<<<<<<< HEAD
            staffList: [
                {
                    id: 1,
                    name: 'Hoàng Mỹ Phi',
                    role: 'Ông chủ'
                },
                {
                    id: 2,
                    name: 'Phạm Khắc Duy',
                    role: 'Quản lý chi nhánh'
                },
                {
                    id: 3,
                    name: 'Tạ Nguyễn Chung Tín',
                    role: 'Phụ vụ bán thời gian'
                },
                {
                    id: 4,
                    name: 'Nguyễn Minh Đức',
                    role: 'Lao công'
                }
            ]
=======
            deletedRowkey: null,
            staffsFromServer:[],
            refreshsing: false,
            deleteID: '',
>>>>>>> c527b274bef71b3a84a5def2317c89923f1c47dd
        })
    }
    // refresh list khi state thay doi 
    refreshStaffList = (activeKey) =>{
        this.setState((prevState) =>{
            return{
                deletedRowKey: activeKey
            };
        });
    }
    // refresh data from server 
    refreshDataFromServer = () =>{
        this.setState({refreshing: true});
        getStaffFromServer().then((staffs) =>{
            this.setState({staffsFromServer: staffs});
            this.setState({refreshing:false});
        }).catch( error =>{
            this.setState({staffsFromServer: []});
            this.setState({refreshing:false});
        });
        

    }
    _onRefresh = () =>{
        this.refreshDataFromServer();
    }
    _onDelete =() =>{
        deleteAStaff(this.state.deleteID)
        .then(this.refreshDataFromServer());
    }
    componentDidMount(){
        this.refreshDataFromServer();
    }
    // Right action on Swipeable
    RightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
          inputRange: [-100, 0],
          outputRange: [0.7, 0]
        })
        return (   
            <View style={{ 
                backgroundColor: 'red', 
                justifyContent: 'center',
                marginBottom: 5,
                marginTop: 5,
                padding: 6,
<<<<<<< HEAD
    }}>
              <Animated.Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  paddingHorizontal: 10,
                  fontWeight: '600',
                  transform: [{ scale }]
                }}>
                Xóa
              </Animated.Text>
            </View>
=======
            }}>
                <TouchableOpacity onPress ={this._onDelete}>
                    <Animated.Text
                        style={{
                        fontSize: 20,
                        color: 'white',
                        paddingHorizontal: 10,
                        fontWeight: '600',
                        transform: [{ scale }]}}>
                            Delete
                    </Animated.Text>
                </TouchableOpacity>
    </View>
>>>>>>> c527b274bef71b3a84a5def2317c89923f1c47dd
           
         
        )
       }

    render() {
        return (
            <FlatList
                data={this.state.staffsFromServer}
                renderItem={({item}) =>
                    <View>
                        <Swipable 
                            renderRightActions={this.RightActions}
                            onSwipeableRightOpen= {() =>{
                            this.setState({deleteID: item.STAFFID});
                            console.log(this.state.deleteID);
                        }}
                            >
                            <StaffListComp name={item.STAFFNAME} role={item.position}/> 
                        </Swipable>
                    </View>}
                keyExtractor={(item) => `${item.STAFFID}`}
                refreshControl = 
                {<RefreshControl
                    refreshing = {this.state.refreshsing}
                    onRefresh = {this._onRefresh}    
                />} >
            </FlatList>
        )
    }
}

const styles = StyleSheet.create({
    seperatorLine:{
        height: 1, 
        backgroundColor: 'black',
    }
})