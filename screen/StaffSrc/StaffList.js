import React, { Component } from 'react'
import {View, StyleSheet, FlatList, Text } from 'react-native'
import StaffListComp from '../../components/StaffListComp'
import { fetchStaff, deleteStaff } from '../../redux/actions/staffActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    MenuProvider, Menu, MenuTrigger, MenuOptions, MenuOption
} from 'react-native-popup-menu';
class StaffList extends Component {

    // }
    componentDidMount(){
       // this.refreshDataFromServer();
       this.props.fetchStaff();
    }
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
  
