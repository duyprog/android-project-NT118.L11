import {FETCHING_TABLE_REQUEST, FETCHING_TABLE_SUCCESS, FETCHING_TABLE_FAILURE, CHOOSE_A_TABLE} from '../actions/types';

const initialState = {
    tableData: {
        table: [],
        tbRefreshing: false,
        errMsg: '', 
    }    
};

const tableReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCHING_TABLE_REQUEST:
            return{...state, tableData: {...state.tableData, tbRefreshing: true}};
        case FETCHING_TABLE_FAILURE:
            return{...state, tableData: {...state.tableData, tbRefreshing: false}};
        case FETCHING_TABLE_SUCCESS:
            return{...state, tableData: {...state.tableData, tbRefreshing: false, table: action.payload}};
        
        default: 
            return state;
    }
}
export default tableReducer;