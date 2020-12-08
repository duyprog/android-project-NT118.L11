import {CHOOSE_A_TABLE, FETCHING_TABLE_REQUEST, FETCHING_TABLE_SUCCESS, FETCHING_TABLE_FAILURE} from './types';

export const fetchingTableRequest = () =>({
    type: FETCHING_TABLE_REQUEST
});

export const fetchingTableSuccess = (json) =>({
    type: FETCHING_TABLE_SUCCESS,
    payload: json,
});

export const fetchingTableFailure = (error) => ({
    type: FETCHING_TABLE_FAILURE,
    payload: error,
});

export const fetchTable = () => {
    return async dispatch => {
       dispatch(fetchingTableRequest());
       try{ 
           let response = await fetch('192.168.1.9:3000/get_all_table');
           let json = await response.json();
           dispatch(fetchingTableSuccess(json));
       }
       catch(error){
           dispatch(fetchingTableFailure());
       }
    }
}
