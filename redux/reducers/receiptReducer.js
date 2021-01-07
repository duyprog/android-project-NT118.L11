import {FETCHING_RECEIPT_REQUEST, FETCHING_RECEIPT_FAILURE, 
    FETCHING_RECEIPT_COMPLETE_SUCCESS, FETCHING_RECEIPT_INCOMPLETE_SUCCESS, 
    CHOOSE_RECEIPT_TO_SEE, FETCHING_TOTAL_REQUEST, FETCHING_TOTAL_SUCCESS,
    INSERT_TAKEAWAY_SUCCESS, INSERT_TAKEAWAY_REQUEST, INSERT_TAKEAWAY_FAILURE
} from '../actions/types';
const intitialState = { 
    receiptData: {
        refreshing: false, 
        completeReceipt: [], 
        incompleteReceipt: [], 
        chooseReceipt:'', 
        totalPrice: []
    }
}

const receiptReducer = (state = intitialState, action) =>{
    switch(action.type){
        case FETCHING_RECEIPT_REQUEST:
            return{
                ...state, 
                receiptData:{
                    ...state.receiptData,
                    refreshing: true
                }
            };
        case FETCHING_RECEIPT_COMPLETE_SUCCESS:
            return{
                ...state, 
                receiptData:{
                    ...state.receiptData,
                    refreshing: false, 
                    completeReceipt: action.payload
                }
            }
        case FETCHING_RECEIPT_INCOMPLETE_SUCCESS:
            return{
                ...state,
                receiptData:{
                    ...state.receiptData,
                    refreshing: false, 
                    incompleteReceipt: action.payload
                }
            }
        case FETCHING_RECEIPT_FAILURE: 
            return{ 
                ...state, 
                receiptData: {
                    ...state.receiptData,
                    refreshing: false
                }
            }
        case CHOOSE_RECEIPT_TO_SEE: 
            return{ 
                ...state, 
                receiptData: {
                    ...state.receiptData, 
                    refreshing: false,
                    chooseReceipt: action.payload
                }
            }
        case FETCHING_TOTAL_REQUEST: 
            return{
                ...state, 
                receiptData:{
                    ...state.receiptData, 
                    refreshing: true, 
                }
            }
        case FETCHING_TOTAL_SUCCESS: 
            return{
                ...state, 
                receiptData: {
                    ...state.receiptData,
                    refreshing: false, 
                    totalPrice: action.payload
                }
            }
        case INSERT_TAKEAWAY_REQUEST: {
            return{
                ...state, 
                receiptData: {
                    ...state.receiptData,
                    refreshing: false, 
                }
            }
        }
        case INSERT_TAKEAWAY_SUCCESS:{
            return{
                ...state, 
                receiptData:{
                    ...state.receiptData, 
                    refreshing: false
                }
            }
        }
        case INSERT_TAKEAWAY_FAILURE:{
            return{
                ...state, 
                receiptData:{
                    ...state.receiptData, 
                    refreshing: false
                }
            }
        }
        default: 
            return state;
    }
}

export default receiptReducer;
