import {FETCHING_DETAIL_FAILURE, FETCHING_DETAIL_SUCCESS, FETCHING_DETAIL_REQUEST, FETCHING_CURRENT_RECEIPT_REQUEST, FETCHING_CURRENT_RECEIPT_SUCCESS, FETCHING_CURRENT_RECEIPT_FAILURE} from '../actions/types';
const initialState = { 
    receiptDetailData: 
    {
        receiptDetail: [], 

        refreshing: false, 
        currentReceiptID: []
    }
}

const receiptDetailReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCHING_DETAIL_REQUEST: 
            return{
                ...state, 
                receiptDetailData:{
                    ...state.receiptDetailData, 
                    refreshing: true
                }
            };
        case FETCHING_DETAIL_SUCCESS:
            return{ 
                ...state, 
                receiptDetailData:{
                    ...state.receiptDetailData, 
                    refreshing: false,
                    receiptDetail: action.payload
                }
            };    
        case FETCHING_DETAIL_FAILURE:
            return{
                ...state, 
                receiptDetailData:{
                    ...state.receiptDetailData, 
                    refreshing: false, 
                }
            };
        case FETCHING_CURRENT_RECEIPT_REQUEST:
            return {
                ...state, 
                receiptDetailData:{
                    ...state.receiptDetailData, 
                    refreshing: false,
                }
            }
        case FETCHING_CURRENT_RECEIPT_SUCCESS: 
            return {
                ...state, 
                receiptDetailData: {
                    ...state.receiptDetailData,
                    refreshing: false, 
                    currentReceiptID: action.payload 
                }
            }
        case FETCHING_CURRENT_RECEIPT_FAILURE: 
            return{ 
                ...state, 
                receiptDetailData:{
                    ...state.receiptDetailData, 
                    refreshing: false, 
                }
            }
        default: 
            return state;
    }
}
export default receiptDetailReducer;