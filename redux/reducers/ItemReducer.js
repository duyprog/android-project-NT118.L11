import {  FETCHING_ITEM_REQUEST, FETCHING_ITEM_FAILURE, FETCHING_FOOD_SUCCESS,
    FETCHING_DESSERT_SUCCESS, FETCHING_DRINK_SUCCESS, FETCHING_FRIED_SUCCESS,
    FETCHING_HOTPOT_SUCCESS, FETCHING_NOODLE_SUCCESS, CHOOSE_ITEM} from '../actions/types';

const initialState = { 
    itemData: { 
        refreshing: false, 
        dessertItems: [],
        drinkItems: [],
        hotpotItems: [],
        foodItems: [],
        noodleItems: [],
        friedItems: [],
        choItem: []
    }
}

const itemReducer = (state=initialState, action) =>{
    switch(action.type){
        //  food
        case FETCHING_ITEM_REQUEST: 
            return{
                ...state, 
                itemData:{
                    ...state.itemData, 
                    refreshing: true
                }
            };
        case FETCHING_FOOD_SUCCESS: 
            return{
                ...state, 
                itemData:{
                    ...state.itemData, 
                    refreshing: false,
                    foodItems: action.payload
                }
            };
        case FETCHING_DRINK_SUCCESS: 
            return{
                ...state, 
                itemData:{
                    ...state.itemData, 
                    refreshing: false,
                    drinkItems: action.payload
                }
            };
        case FETCHING_DESSERT_SUCCESS: 
            return{
                ...state, 
                itemData:{
                    ...state.itemData, 
                    refreshing: false,
                    dessertItems: action.payload
                }
            };
        case FETCHING_HOTPOT_SUCCESS: 
            return{
                ...state, 
                itemData:{
                    ...state.itemData, 
                    refreshing: false,
                    hotpotItems: action.payload
                }
            };
        case FETCHING_NOODLE_SUCCESS: 
            return{
                ...state, 
                itemData:{
                    ...state.itemData, 
                    refreshing: false,
                    noodleItems: action.payload
                }
            };
        case FETCHING_FRIED_SUCCESS: 
            return{
                ...state, 
                itemData:{
                    ...state.itemData, 
                    refreshing: false,
                    friedItems: action.payload
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
        case CHOOSE_ITEM:
            return{
                ...state, 
                itemData:{
                    ...state.itemData,
                    refreshing:false, 
                    choItem: action.payload
                } 
            }
        default: 
                return state;
    }
}

export default itemReducer;