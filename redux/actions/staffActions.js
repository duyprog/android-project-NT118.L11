import { CHOOSE_A_STAFF, FETCHING_STAFF_REQUEST, FETCHING_STAFF_SUCCESS, FETCHING_STAFF_FAILURE,
        DELETE_STAFF_REQUEST, DELETE_STAFF_SUCCESS, DELETE_STAFF_FAILURE,SWIPE_TO_CHOOSE_DELETEID, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE}
from './types';

import { authHeader } from '../../components/auth-header';

import { IP } from '../../components/IP';


// Fetch Staff
export const fetchingStaffRequest = () =>
({type: FETCHING_STAFF_REQUEST});

export const fetchingStaffSuccess = (json) => 
({
    type: FETCHING_STAFF_SUCCESS,
    payload: json
});

export const fetchingStaffFailure = (error) =>({
    type: FETCHING_STAFF_FAILURE,
    payload: error
});

export const fetchStaff = () => {
    return async dispatch =>{
        dispatch(fetchingStaffRequest());
        try{
            let response = await fetch('http://'+ IP +':4000/users') + {
                method: 'GET',
                headers: authHeader()
            };
            let json = await response.json();
            dispatch(fetchingStaffSuccess(json));
        }
        catch(error){
            dispatch(fetchingStaffFailure(error));
        }
    }
}

// Delete Staff 

export const deleteStaffRequest = () => ({
    type: DELETE_STAFF_REQUEST,
});

export const deleteStaffSuccess = () => ({
    type: DELETE_STAFF_SUCCESS,
    payload
});
export const deleteStaffFailure = () =>({
    type: DELETE_STAFF_FAILURE,
});
export const swipeToChooseDeleteId = (id) => ({
    type: SWIPE_TO_CHOOSE_DELETEID,
    payload: id
});


export const deleteStaff = (id) => {
    return async dispatch =>{
        dispatch(deleteStaffRequest());
        try{
            let response = await fetch('http://'+ IP +':4000/api/staffs/deleteStaff/' + id,{
                method: 'DELETE',
                body: JSON.stringify(id)
            });
            let json = await response.json();
            console.log(json)
            dispatch(deleteStaffSuccess(json));
        }
        catch(error){
            dispatch(deleteStaffFailure(error));
        }
    }
}

export const LoginRequest = () =>({type: LOGIN_REQUEST});

export const LoginSuccess = (json) => 
({
    type: LOGIN_SUCCESS,
    payload: json
});

export const LoginFailure = (error) =>({
    type: LOGIN_FAILURE,
    payload: error
});

export const userLogin = (staffusername, password) => {
    return async dispatch =>{
        dispatch(LoginRequest());
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ staffusername, password })
            };
            let response = await fetch('https://'+ IP +':4000/users/authenticate', requestOptions)
            let json = await response.json();
            dispatch(LoginSuccess(json));
            console.log(json);
        }
        catch(error){
            dispatch(LoginFailure(error));
        }
    }
}