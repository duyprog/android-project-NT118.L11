import {FETCHING_ITEM_FAILURE, FETCHING_ITEM_REQUEST, FETCHING_ITEM_SUCCESS} from '../actions/types';

const initialState = { 
    itemData: { 
        refreshing: false, 
        item: []
    }
}

const itemReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCHING_ITEM_REQUEST: 
            return{
                ...state, 
                itemData:{
                    ...state.itemData, 
                    refreshing: true
                }
            };
        case FETCHING_ITEM_SUCCESS: 
            return{
                ...state, 
                itemData:{
                    ...state.itemData, 
                    refreshing: false,
                    item: action.payload
                }
            };
        case FETCHING_ITEM_FAILURE: 
            return{
                ...state, 
                itemData: {
                    ...state.itemData, 
                    refreshing: false, 
                }
            }
        default: 
            return state
    };
}

export default itemReducer;