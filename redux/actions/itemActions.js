import {FETCHING_ITEM_REQUEST, FETCHING_ITEM_SUCCESS, FETCHING_ITEM_FAILURE} from './types';
var ip = '192.168.1.16';

// fetch food items 
export const fetchingFastFoodItemRequest = () => ({
    type: FETCHING_ITEM_REQUEST
});

export const fetchingFastFoodItemSuccess = (json) => ({
    type: FETCHING_ITEM_SUCCESS,
    payload: json
});

export const fetchingFastFoodItemFailure = (error) =>({
    type: FETCHING_ITEM_FAILURE,
    payload: error
});

//function fetch Fast Food
export const fetchFastFood = () =>{
    return async dispatch => {
        dispatch(fetchingFastFoodItemRequest());
        try{
            let response = await fetch('http' + ip + ':3000/get_all_food_item');
            let json = await response.json();
            dispatch(fetchingFastFoodItemSuccess(json));
        }
        catch(error){
            dispatch(fetchingFastFoodItemFailure(error));
        }
    }
}

// fetch drink item
export const fetchingDrinkItemRequest = () => ({
    type: FETCHING_ITEM_REQUEST
});

export const fetchingDrinkItemSuccess = (json) => ({
    type: FETCHING_ITEM_SUCCESS,
    payload: json
});

export const fetchingDrinkItemFailure = (error) =>({
    type: FETCHING_ITEM_FAILURE,
    payload: error
});

// fetch drink item function 
export const fetchDrink = () =>{
    return async dispatch => {
        dispatch(fetchingDrinkItemRequest());
        try{ 
            let response = await fetch('http://' + ip + ':3000/get_all_drink_item');
            let json = await response.json();
            dispatch(fetchingDrinkItemSuccess(json));
        }
        catch(error) {
            dispatch(fetchingDrinkItemFailure(error));
        }
    }
}


// fetch Noodle item 
export const fetchingNoodleItemRequest = () => ({
    type: FETCHING_ITEM_REQUEST
});

export const fetchingNoodleItemSuccess = (json) => ({
    type: FETCHING_ITEM_SUCCESS,
    payload: json
});

export const fetchingNoodleItemFailure = (error) =>({
    type: FETCHING_ITEM_FAILURE,
    payload: error
});

// fetch noodle function 
export const fetchNoodle = () =>{
    return async dispatch =>{
        try {
            let response = await fetch('http://' + ip + ':3000/get_all_noodles_item');
            let json = response.json(); 
            dispatch(fetchingNoodleItemSuccess(json)); 
        } catch (error) {
            dispatch(fetchingNoodleItemFailure(error));
        }
              
    }
}
// fetch Fried item 
export const fetchingFriedItemRequest = () => ({
    type: FETCHING_ITEM_REQUEST
});

export const fetchingFriedItemSuccess = (json) => ({
    type: FETCHING_ITEM_SUCCESS,
    payload: json
});

export const fetchingFriedItemFailure = (error) =>({
    type: FETCHING_ITEM_FAILURE,
    payload: error
});
// fetch fried function
export const fetchFried = () => {
    return async dispatch => {
        dispatch(fetchingFriedItemRequest());
        try {    
            let response = await fetch('http://' + ip + ':3000/get_all_fried_item');
            let json = await response.json();
            dispatch(fetchingFriedItemSuccess(json));
        } catch (error) {
            dispatch(fetchingFriedItemFailure(error));
        }
    }
}

// fetch Hotpot items
export const fetchingHotpotItemRequest = () => ({
    type: FETCHING_ITEM_REQUEST
});

export const fetchingHotpotItemSuccess = (json) => ({
    type: FETCHING_ITEM_SUCCESS,
    payload: json
});

export const fetchingHotpotItemFailure = (error) =>({
    type: FETCHING_ITEM_FAILURE,
    payload: error
});

// fetch Hotpot function 
export const fetchHotpot = () => {
    return async dispatch => {
        dispatch(fetchingHotpotItemRequest());
        try {
            let response = await fetch('http://' + ip + ':3000/get_all_hotpot_item');
            let json = await response.json();
            dispatch(fetchingHotpotItemSuccess(json));
        } catch (error) {
            dispatch(fetchingHotpotItemFailure(error));
        } 
    }
}
//fetch Dessert items
export const fetchingDessertItemRequest = () => ({
    type: FETCHING_ITEM_REQUEST
});

export const fetchingDessertItemSuccess = (json) => ({
    type: FETCHING_ITEM_SUCCESS,
    payload: json
});

export const fetchingDessertItemFailure = (error) =>({
    type: FETCHING_ITEM_FAILURE,
    payload: error
});

// fetch Dessert function 
export const fetchDessert = () => {
    return async dispatch => {
        dispatch(fetchingDessertItemRequest());
        try {
            let response = await fetch('http://' + ip + ':3000/get_all_dessert_item');
            let json = await response.json();
            dispatch(fetchingDessertItemSuccess(json));
        } catch (error) {
            dispatch(fetchingDessertItemFailure(error));
        } 
    }
}