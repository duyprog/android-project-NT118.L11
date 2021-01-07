import {FETCHING_RECEIPT_REQUEST, FETCHING_RECEIPT_FAILURE,
     FETCHING_RECEIPT_COMPLETE_SUCCESS, FETCHING_RECEIPT_INCOMPLETE_SUCCESS, 
     CHOOSE_RECEIPT_TO_SEE, INSERT_RECEIPT_REQUEST, INSERT_RECEIPT_FAILURE, 
     INSERT_RECEIPT_SUCCESS, UPDATE_TOTAL_REQUEST, UPDATE_TOTAL_SUCCESS, UPDATE_TOTAL_FAILURE,
    FETCHING_TOTAL_REQUEST, FETCHING_TOTAL_SUCCESS, FETCHING_TOTAL_FAILURE, UPDATE_DONE_RECEIPT, INSERT_TAKEAWAY_SUCCESS, INSERT_CUSTOMER_FAILURE} from './types';

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
export const updateTotalRequest = () => ({
    type: UPDATE_TOTAL_REQUEST
});
export const updateTotalSuccess = (json) => ({
    type: UPDATE_TOTAL_SUCCESS,
    payload: json
});
export const updateTotalFailure = (err) => ({
    type: UPDATE_TOTAL_FAILURE,
    payload: err
});
export const fetchingTotalRequest = () => ({
    type: FETCHING_TOTAL_REQUEST
});
export const fetchingTotalSuccess = (json) => ({
    type: FETCHING_TOTAL_SUCCESS, 
    payload: json 
});
export const fetchingTotalFailure = (err) => ({
    type: FETCHING_RECEIPT_FAILURE, 
    payload: err 
});

export const insertTakeAwayRequest = () =>({
    type: INSERT_TAKEAWAY_REQUEST
});
export const insertTakeAwaySuccess = () =>({
    type: INSERT_TAKEAWAY_SUCCESS
});

export const insertTakeAwayFailure = () =>({
    type: INSERT_TAKEAWAY_FAILURE
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

export const insertTakeAwayReceipt = (TABLEID) => {
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

export const updateTotalPrice = () => {
    return async dispatch => {
        dispatch(updateTotalRequest());
        try{ 
           await fetch('http://' + IP + ':3000/update_receiptdetail_price', {
            method: 'PUT',
            headers: {
                'Accept':'application/json', 
                'Content-Type': 'application/json'
            }});
           let response = await fetch('http://' + IP + ':3000/update_receipt_total_price',{
            method: 'PUT',
            headers: {
                'Accept':'application/json', 
                'Content-Type': 'application/json'
            }});
           let json = await response.json();
           dispatch(updateTotalSuccess(json));
       }
       catch(error){
           dispatch(updateTotalFailure(error));
       }

    }
}
export const updateDoneReceipt = (RECEIPT_ID) => {
    return async dispatch => {
        try{
            dispatch({
                type: UPDATE_DONE_RECEIPT
            });
            await fetch(`http://${IP}:3000/update_receipt_done/${RECEIPT_ID}`,{
                method: 'PUT',
                headers: {
                    'Accept':'application/json', 
                    'Content-Type': 'application/json'
                }});
        }
        catch(err){
            
        }
    }
}
export const fetchTotalPriceById = (RECEIPT_ID) => {
    return async dispatch => {
        dispatch(fetchingTotalRequest());
        try {
            let response = await fetch('http://'+ IP + ':3000/get_totalprice_by_id/' + RECEIPT_ID);
            let json = await response.json();
            dispatch(fetchingTotalSuccess(json[0].TOTALPRICE));
        } catch (error) {
            dispatch(fetchingTotalFailure(error));
        }
    }
}