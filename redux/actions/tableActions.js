import {CHOOSE_A_TABLE, FETCHING_TABLE_REQUEST, FETCHING_TABLE_SUCCESS, FETCHING_TABLE_FAILURE} from './types';
import { IP } from '../../components/IP';


export const fetchingTableRequest = () =>({
    type: FETCHING_TABLE_REQUEST
});

export const fetchingTableSuccess = (json) =>({
    type: FETCHING_TABLE_SUCCESS,
    payload: json
});

export const fetchingTableFailure = (error) => ({
    type: FETCHING_TABLE_FAILURE,
    payload: error,
});

export const choosingTable = (tableID) =>({
    type: CHOOSE_A_TABLE,
    payload: tableID
})

export const fetchTable = () => {
    return async dispatch => {
       dispatch(fetchingTableRequest());
       try{ 
           let response = await fetch('http://' + IP + ':3000/get_all_table');
           let json = await response.json();
           dispatch(fetchingTableSuccess(json));
       }
       catch(error){
           dispatch(fetchingTableFailure(error));
       }
    }
}


export const chooseATable = (tableID) => {
    return dispatch => {
         dispatch(choosingTable(tableID));
    }
}