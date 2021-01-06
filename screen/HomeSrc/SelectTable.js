import React, { Component } from 'react'
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTable, chooseATable } from '../../redux/actions/tableActions';
import Table from '../../components/Table';
class SelectTable extends Component {
    componentDidMount(){
        this.props.fetchTable();
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
    choosedTable: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
    return{
        table: state.tableReducer.tableData.table,
        choosedTable: state.tableReducer.tableData.choosedTable,
    };
}
export default connect(mapStateToProps, {fetchTable, chooseATable}) (SelectTable);