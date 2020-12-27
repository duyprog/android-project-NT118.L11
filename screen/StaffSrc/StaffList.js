import React, { Component } from 'react'
import {View, StyleSheet, FlatList, Text } from 'react-native'
import StaffListComp from '../../components/StaffListComp'
import { fetchStaff, deleteStaff } from '../../redux/actions/staffActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    MenuProvider, Menu, MenuTrigger, MenuOptions, MenuOption
} from 'react-native-popup-menu';
import { useStore } from 'react-redux'; 
//import store from '../../index';
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
       console.log(this.props.staff);
    }
    // Right action on Swipeable
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
    //          <TouchableOpacity onPress ={this.props.deleteStaff(this.props.randomStaffs.deleteID)}>
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
            <MenuProvider>
            <FlatList
                data={this.props.staff}
                renderItem={({item}) =>
                
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 8}}>
                            <StaffListComp name={item.staffName} role={item.staffPosition}/>
                        </View>
                        
                        <Menu>
                            <MenuTrigger customStyles={triggerStyles}><Text>Edit</Text></MenuTrigger>
                            <MenuOptions>
                                <MenuOption onSelect={() => alert(`Save`)} text='Update' />
                                <MenuOption onSelect={async () =>{
                                    await this.props.deleteStaff(item.id);
                                    await this.props.fetchStaff();
                                }} >
                                <Text style={{color: 'red'}}>Delete</Text>
                                </MenuOption>
                               
                            </MenuOptions>
                        </Menu>
                    </View>
                        
            }
                keyExtractor={(item) => `${item.id}`}>        
            </FlatList>
            </MenuProvider>
        )
    }
}
StaffList.propTypes = {
    fetchStaff: PropTypes.func.isRequired,
    staff: PropTypes.array.isRequired
}
const styles = StyleSheet.create({
    seperatorLine:{
        height: 1, 
        backgroundColor: 'black',
    }
});
const mapStateToProps = state =>{
    return{
        staff: state.staffReducer.staffData.staff
    };
}
export default connect(mapStateToProps, {fetchStaff, deleteStaff}) (StaffList);

const triggerStyles = {
    triggerOuterWrapper: {
      padding: 5,
      flex: 1,
    },
    triggerWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  };
  
