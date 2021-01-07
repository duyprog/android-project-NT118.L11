<<<<<<< HEAD
import { CHOOSE_A_STAFF, FETCHING_STAFF_REQUEST, FETCHING_STAFF_SUCCESS, FETCHING_STAFF_FAILURE,
        DELETE_STAFF_REQUEST, DELETE_STAFF_SUCCESS, DELETE_STAFF_FAILURE,SWIPE_TO_CHOOSE_DELETEID, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE}
from './types';

import { authHeader } from '../../components/auth-header';

import { IP } from '../../components/IP';

=======
import {
  FETCHING_STAFF_REQUEST,
  FETCHING_STAFF_SUCCESS,
  FETCHING_STAFF_FAILURE,
  DELETE_STAFF_REQUEST,
  DELETE_STAFF_SUCCESS,
  DELETE_STAFF_FAILURE,
  SWIPE_TO_CHOOSE_DELETEID,
  INSERT_STAFF_REQUEST,
  INSERT_STAFF_SUCCESS,
  INSERT_STAFF_FAILURE,
} from './types';

import {IP} from '../../components/IP';
>>>>>>> main

// Fetch Staff
export const fetchingStaffRequest = () => ({type: FETCHING_STAFF_REQUEST});

export const fetchingStaffSuccess = (json) => ({
  type: FETCHING_STAFF_SUCCESS,
  payload: json,
});

export const fetchingStaffFailure = (error) => ({
  type: FETCHING_STAFF_FAILURE,
  payload: error,
});

export const fetchStaff = () => {
<<<<<<< HEAD
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
=======
  return async (dispatch) => {
    dispatch(fetchingStaffRequest());
    try {
      let response = await fetch(`http://${IP}:3000/get_all_staff`);
      let json = await response.json();
      dispatch(fetchingStaffSuccess(json));
    } catch (error) {
      dispatch(fetchingStaffFailure(error));
>>>>>>> main
    }
  };
};

// Delete Staff

export const deleteStaffRequest = () => ({
  type: DELETE_STAFF_REQUEST,
});

export const deleteStaffSuccess = () => ({
  type: DELETE_STAFF_SUCCESS,
  payload,
});
export const deleteStaffFailure = () => ({
  type: DELETE_STAFF_FAILURE,
});
export const swipeToChooseDeleteId = (id) => ({
  type: SWIPE_TO_CHOOSE_DELETEID,
  payload: id,
});

export const deleteStaff = (id) => {
<<<<<<< HEAD
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
=======
  return async (dispatch) => {
    dispatch(deleteStaffRequest());
    try {
      let response = await fetch(`http://${IP}:3000/delete_a_staff/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(id),
      });
      let json = await response.json();
      console.log(json);
      dispatch(deleteStaffSuccess(json));
    } catch (error) {
      dispatch(deleteStaffFailure(error));
>>>>>>> main
    }
  };
};

// Add Staff

<<<<<<< HEAD
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
=======
export const insertStaffRequest = () => ({
  type: INSERT_STAFF_REQUEST,
});
export const insertStaffSuccess = (json) => ({
  type: INSERT_STAFF_SUCCESS,
  payload: json,
});
export const insertStaffFailure = (err) => ({
  type: INSERT_STAFF_FAILURE,
  payload: err,
});

export const insertNewStaff = (
  staff_name,
  staffdob,
  staff_phone,
  staffusername,
  staffpasswd,
  staffposition,
) => {
  return async (dispatch) => {
    dispatch(insertStaffRequest());
    try {
      let response = await fetch(
        `http://${IP}:3000/insert_new_staff/${staff_name}/${staffdob}/${staff_phone}/${staffusername}/${staffpasswd}/${staffposition}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            staff_name,
            staffdob,
            staff_phone,
            staffusername,
            staffpasswd,
            staffposition,
          }),
        },
      );
      let json = await response.json();
      dispatch(insertStaffSuccess(json));
    } catch (error) {
      dispatch(insertStaffFailure(error));
    }
  };
};
>>>>>>> main
