import {FETCHING_RECEIPT_REQUEST, FETCHING_RECEIPT_FAILURE,
     FETCHING_RECEIPT_COMPLETE_SUCCESS, FETCHING_RECEIPT_INCOMPLETE_SUCCESS, 
     CHOOSE_RECEIPT_TO_SEE, INSERT_RECEIPT_REQUEST, INSERT_RECEIPT_FAILURE, INSERT_RECEIPT_SUCCESS} from './types';

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
export const insertReceiptRequest = () => ({
    type: INSERT_RECEIPT_REQUEST, 
});

export const insertReceiptSuccess = (json) => ({
    type: INSERT_RECEIPT_SUCCESS, 
    payload: json
});
export const insertReceiptFailure = (err) =>({
    type: INSERT_RECEIPT_FAILURE, 
    payload: err
});

export const insertReceipt = (TABLEID) => {
    return async dispatch =>{
        dispatch(insertReceiptRequest());
        try{
            let response = await fetch('http://' + IP + `:3000/insert_new_receipt/2/1/${TABLEID}/1`, {
                method: 'POST',
                headers: {
                    'Accept':'application/json', 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({TABLEID})
            });
            let json = await response.json();
            dispatch(insertReceiptSuccess(json));
        }
        catch(err) {
            dispatch(insertReceiptFailure(err));
        }
    }
}


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