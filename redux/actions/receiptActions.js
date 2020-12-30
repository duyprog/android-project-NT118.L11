import {FETCHING_RECEIPT_REQUEST, FETCHING_RECEIPT_FAILURE, FETCHING_RECEIPT_COMPLETE_SUCCESS, FETCHING_RECEIPT_INCOMPLETE_SUCCESS, CHOOSE_RECEIPT_TO_SEE} from './types';

import { IP } from '../../components/IP';

export const fetchingReceiptRequest = () =>({
    type: FETCHING_RECEIPT_REQUEST
});

export const fetchingReceiptCompleteSuccess = (json) =>({
    type: FETCHING_RECEIPT_COMPLETE_SUCCESS,
    payload: json
});

export const fetchingReceiptIncompleteSuccess = (json) =>({
    type: FETCHING_RECEIPT_INCOMPLETE_SUCCESS,
    payload: json
});

export const fetchingReceiptFailure = (error) => ({
    type: FETCHING_RECEIPT_FAILURE,
    payload: error,
});

export const chooseReceipt = (receiptID) =>({
    type: CHOOSE_RECEIPT_TO_SEE, 
    payload: receiptID
}) 


export const chooseReceiptToSee = (receiptID) =>{
    return async dispatch => {
        dispatch(chooseReceipt(receiptID));
    }
}
export const fetchCompleteReceipt = () => {
    return async dispatch => {
       dispatch(fetchingReceiptRequest());
       try{ 
           let response = await fetch('http://' + IP + ':3000/get_all_complete_receipt');
           let json = await response.json();
           dispatch(fetchingReceiptCompleteSuccess(json));
       }
       catch(error){
           dispatch(fetchingReceiptFailure(error));
       }
    }
}
export const fetchInCompleteReceipt = () => {
    return async dispatch => {
       dispatch(fetchingReceiptRequest());
       try{ 
           let response = await fetch('http://' + IP + ':3000/get_all_incomplete_receipt');
           let json = await response.json();
           dispatch(fetchingReceiptIncompleteSuccess(json));
       }
       catch(error){
           dispatch(fetchingReceiptFailure(error));
       }
    }
}