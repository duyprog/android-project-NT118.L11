import {CHOOSE_A_TABLE, FETCHING_TABLE_REQUEST, FETCHING_TABLE_SUCCESS, FETCHING_TABLE_FAILURE} from './types';

var ip = '192.168.1.16';

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
           let response = await fetch('http://192.168.1.16:3000/get_all_table');
           let json = await response.json();
           dispatch(fetchingTableSuccess(json));
       }
       catch(error){
           dispatch(fetchingTableFailure(error));
       }
    }
}


export const chooseATable = (tableID) => {
    return async dispatch => {
        dispatch(choosingTable(tableID));
    }
}