import {
    FETCHING_DETAIL_REQUEST, FETCHING_DETAIL_SUCCESS, FETCHING_DETAIL_FAILURE, FETCHING_CURRENT_RECEIPT_SUCCESS,
    FETCHING_CURRENT_RECEIPT_FAILURE,
    FETCHING_CURRENT_RECEIPT_REQUEST,
    INSERT_DETAIL_REQUEST,
    INSERT_DETAIL_FAILURE,
    INSERT_DETAIL_SUCCESS
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
export const insertDetailRequest = () => ({
    type: INSERT_DETAIL_REQUEST
});
export const insertDetailSuccess = (json) => ({
    type: INSERT_DETAIL_SUCCESS, 
    payload: json
});
export const insertDetailFailure = (err) => ({
    type: INSERT_DETAIL_FAILURE, 
    payload: err
})
export const fetchCurrentReceiptId = () => {
    return async dispatch => {
        dispatch(fetchingCurrentReceiptRequest());
        try {
            let response = await fetch('http://'+ IP + ':3000/get_id_current_receipt');
            let json = await response.json();
            dispatch(fetchingCurrentReceiptSuccess(json[0].RECEIPT_ID));
        } catch (error) {
            dispatch(fetchingCurrentReceiptFailure(error));
        }
    }
}

export const insertNewDetail = (RECEIPT_ID, ITEM_ID, QUANTITY) =>{
    return async dispatch =>{
        dispatch(insertDetailRequest());
        try{
            let response = await fetch('http://' + IP + `:3000/insert_new_receipt_detail/${RECEIPT_ID}/${ITEM_ID}/${QUANTITY}`, {
                method: 'POST',
                headers: {
                    'Accept':'application/json', 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({RECEIPT_ID, ITEM_ID, QUANTITY})
            });
            let json = await response.json();
            dispatch(insertDetailSuccess(json));
        }
        catch(err) {
            dispatch(insertDetailFailure(err));
        }
    }
} 