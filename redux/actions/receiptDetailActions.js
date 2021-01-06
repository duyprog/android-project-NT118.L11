import {
    FETCHING_DETAIL_REQUEST, FETCHING_DETAIL_SUCCESS, FETCHING_DETAIL_FAILURE, FETCHING_CURRENT_RECEIPT_SUCCESS,
    FETCHING_CURRENT_RECEIPT_FAILURE,
    FETCHING_CURRENT_RECEIPT_REQUEST
} from './types';

import {IP} from '../../components/IP'

export const fetchingDetailRequest = () => ({
    type: FETCHING_DETAIL_REQUEST,
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
            let response = await fetch('http://'+ IP + ':3000/get_receiptdetail_by_id/' + receiptID);
            let json = await response.json();
            dispatch(fetchingDetailSuccess(json));
        } catch (error) {
            dispatch(fetchingDetailFailure(error));
        }
    }
}

export const fetchingCurrentReceiptRequest = () => ({
    type: FETCHING_CURRENT_RECEIPT_REQUEST
});
export const fetchingCurrentReceiptSuccess = (json) => ({
    type: FETCHING_CURRENT_RECEIPT_SUCCESS,
    payload: json
});

export const fetchingCurrentReceiptFailure = (error) => ({
    type: FETCHING_CURRENT_RECEIPT_FAILURE,
    payload: error
});

export const fetchCurrentReceiptId = () => {
    return async dispatch => {
        dispatch(fetchingCurrentReceiptRequest());
        try {
            let response = await fetch('http://'+ IP + ':3000/get_id_current_receipt');
            let json = await response.json();
            dispatch(fetchingDetailSuccess(json));
        } catch (error) {
            dispatch(fetchingDetailFailure(error));
        }
    }
}