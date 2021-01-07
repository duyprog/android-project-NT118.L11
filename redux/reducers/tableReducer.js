<<<<<<< HEAD
import {FETCHING_TABLE_REQUEST, FETCHING_TABLE_SUCCESS, FETCHING_TABLE_FAILURE, CHOOSE_A_TABLE
, FETCHING_TBID_BY_R_FAILURE, FETCHING_TBID_BY_R_REQUEST, FETCHING_TBID_BY_R_SUCCESS
} from '../actions/types';
=======
import {FETCHING_TABLE_REQUEST, FETCHING_TABLE_SUCCESS, FETCHING_TABLE_FAILURE, CHOOSE_A_TABLE} from '../actions/types';
>>>>>>> af873c43444cc43d6c39e617380084db842988f0

const initialState = {
    tableData: {
        table: [],
        tbRefreshing: false,
        errMsg: '', 
        choosedTable: ''
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
<<<<<<< HEAD
        case FETCHING_TBID_BY_R_REQUEST: {
            return{
                ...state, 
                tableData: {
                    ...state.tableData, tbRefreshing: true
                }
            }
        }
        case FETCHING_TBID_BY_R_SUCCESS:{
            return {
                ...state, 
                tableData:{
                    ...state.tableData, 
                    tbRefreshing: false, 
                    choosedTable: action.payload
                }
            }
        }
        case FETCHING_TBID_BY_R_FAILURE:{
            return{
                ...state,
                tableData:{
                    ...state.tableData, 
                    tbRefreshing: false
                }
            }
        }
=======
        case CHOOSE_A_TABLE:
            return {...state, tableData: {...state.tableData, choosedTable: action.payload}};
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
        default: 
            return state;
    }
}
export default tableReducer;