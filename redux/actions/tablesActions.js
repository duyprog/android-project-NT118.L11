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

