import React, { Component } from 'react'
import {View, StyleSheet, FlatList, Animated, TouchableOpacity,RefreshControl } from 'react-native'
import Swipable from 'react-native-gesture-handler/Swipeable'
import StaffListComp from '../../components/StaffListComp'
import {getStaffFromServer} from '../../networking/server';
import {deleteAStaff} from '../../networking/server';
import { fetchStaff } from '../../redux/actions/staffActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Staff from './Staff';
class StaffList extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = ({
    //         deletedRowkey: null,
    //         staffsFromServer:[],
    //         refreshsing: false,
    //     })
    //}
    // refresh list khi state thay doi 
    // refreshStaffList = (activeKey) =>{
    //     this.setState((prevState) =>{
    //         return{
    //             deletedRowKey: activeKey
    //         };
    //     });
    // }
    // // refresh data from server 
    // refreshDataFromServer = () =>{
    //     this.setState({refreshing: true});
    //     getStaffFromServer().then((staffs) =>{
    //         this.setState({staffsFromServer: staffs, refreshing:false});
    //     }).catch( error =>{
    //         this.setState({staffsFromServer: [], refreshing:false});
    //     });
    // }
    // _onRefresh = () =>{
    //     this.refreshDataFromServer();
    // }
    // _onDelete =() =>{
    //     deleteAStaff(this.state.deleteID).then(this.refreshDataFromServer()).then(this.setState({refreshing: 'true'}));
    // }
    componentDidMount(){
       // this.refreshDataFromServer();
       this.props.fetchStaff();
       console.log(this.props.randomStaffs);
    }
    // // Right action on Swipeable
    // RightActions = (progress, dragX) => {
    //     const scale = dragX.interpolate({
    //       inputRange: [-100, 0],
    //       outputRange: [0.7, 0]
    //     })
    //     return (   
           
    //         <View style={{ 
    //             backgroundColor: 'red', 
    //             justifyContent: 'center',
    //             marginBottom: 5,
    //             marginTop: 5,
    //             padding: 6,
    // }}>
    //          <TouchableOpacity onPress ={this._onDelete}>
    //                 <Animated.Text
    //                     style={{
    //                     fontSize: 20,
    //                     color: 'white',
    //                     paddingHorizontal: 10,
    //                     fontWeight: '600',
    //                     transform: [{ scale }]}}>
    //                         Delete
    //                 </Animated.Text>
    //             </TouchableOpacity>
    //         </View>
         
           
         
    //     )
    //    }

    render() {
        return (
            <FlatList
                data={this.props.randomStaffs.staff}
                renderItem={({item}) =>
                    <View>
                            <StaffListComp name={item.staffName} role={item.staffPosition}/> 
                    </View>}
                keyExtractor={(item) => `${item.id}`}>        
            </FlatList>
        )
    }
}
StaffList.propTypes = {
    fetchStaff: PropTypes.func.isRequired,
    randomStaffs: PropTypes.object.isRequired
}
const styles = StyleSheet.create({
    seperatorLine:{
        height: 1, 
        backgroundColor: 'black',
    }
});
const mapStateToProps = state =>{
    return{
        randomStaffs: state
    };
}
export default connect(mapStateToProps, {fetchStaff}) (StaffList);