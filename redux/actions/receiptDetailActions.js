import {
    FETCHING_DETAIL_REQUEST, FETCHING_DETAIL_SUCCESS, FETCHING_DETAIL_FAILURE
} from './types';

import {IP} from '../../components/IP'

export const fetchingDetailRequest = (receiptID) => ({
    type: FETCHING_DETAIL_FAILURE, 
});

export const fetchingDetailSuccess = (json) => ({
    type: FETCHING_DETAIL_SUCCESS, 
    payload: json
});

export const fetchingDetailFailure = (error) =>({
    type: FETCHING_DETAIL_FAILURE, 
    payload: error
});

export const fetchDetailById = (receiptID) => {
    return async dispatch => {
        dispatch(fetchingDetailRequest());
        try {
            let response = await fetch('http://'+ IP + ':3000/get_receiptdetail_by_id' +receiptID);
            let json = await response.json();
            dispatch(fetchingDetailSuccess(json));
        } catch (error) {
            dispatch(fetchingDetailFailure(error));
        }
    }
}

