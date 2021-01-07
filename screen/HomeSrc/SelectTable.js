import React, { Component } from 'react'
<<<<<<< HEAD
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native'
=======
import { Text, View, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {useStore} from 'react-redux'
import empty from '../../image/foodMenu/empty-table.png'
import serving from '../../image/foodMenu/serving-table.png'
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTable, chooseATable } from '../../redux/actions/tableActions';
import Table from '../../components/Table';
<<<<<<< HEAD
class SelectTable extends Component {
    componentDidMount(){
        this.props.fetchTable();
=======

// function Table({item, props}) {
//     var ima = serving;
//     const navigation = useNavigation();
//     if(item.TB_STATUS){
//         ima = serving;
//         }
//     else{
//         ima = empty;
//        }
//     //var ima = item.TB_STATUS ? serving : empty
//     return(
//         <TouchableOpacity
//             activeOpacity={0.5}
//             disabled={item.TB_STATUS}
//             onPress={() => { navigation.navigate('Food Menu');
//                 props;
//             }}>
//             <View style={styles.viewStyle}>
//                 <View>
//                     <View style={styles.container}>
//                         <Image style={styles.img} source={ima}/>
//                     </View>
//                     <View style={styles.info}>
//                             <Text style={styles.name}>{'Bàn ' + item.TB_ID}</Text>
//                     </View>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     )
// }

class SelectTable extends Component {
    componentDidMount(){
        this.props.fetchTable();
        console.log(this.props.choosedTable);
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
    }
    render(){
        return(
            <SafeAreaView>
                <FlatList
                    data={this.props.table}
                    numColumns={3}
                    renderItem={({item}) => 
                        <View style={styles.wrapper}>
                            <Table
                                item={item}
                            />
                        </View>}
                    keyExtractor={(item) => item.TB_ID}
                />
            </SafeAreaView>
        )
    }
} 

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 8,
        marginBottom: 10
    },
    viewStyle: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginTop: 10
    },
    container: {
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    img:{
        height: 90,
        width: 90,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        marginTop: 10
    },
    info:{
        alignItems: 'center'
    },
    name: {
        fontSize: 18,
        marginBottom: 8,
        fontWeight: '600'
    }
})

SelectTable.propTypes = {
    fetchTable: PropTypes.func.isRequired,
    chooseATable: PropTypes.func.isRequired, 
    table: PropTypes.array.isRequired,
    choosedTable: PropTypes.number.isRequired,
}

const mapStateToProps = state => {
    return{
        table: state.tableReducer.tableData.table,
        choosedTable: state.tableReducer.tableData.choosedTable,
    };
}
export default connect(mapStateToProps, {fetchTable, chooseATable}) (SelectTable);