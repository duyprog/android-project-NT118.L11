<<<<<<< HEAD
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
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  FETCHING_STAFF_BYID_REQUEST,
  FETCHING_STAFF_BYID_SUCCESS,
  FETCHING_STAFF_BYID_FAILURE,
} from './types';

import {IP} from '../../components/IP';

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
  return async (dispatch) => {
    dispatch(fetchingStaffRequest());
    try {
      let response = await fetch(`http://${IP}:3000/get_all_staff`);
      let json = await response.json();
      dispatch(fetchingStaffSuccess(json));
    } catch (error) {
      dispatch(fetchingStaffFailure(error));
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
    }
  };
};

// Add Staff

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

export const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

export const userLoginSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
  payload,
});
export const userLoginFailure = () => ({
  type: USER_LOGIN_FAILURE,
});

export const userLogin = (
  staffusername, password=d
) => {
  return async (dispatch) => {
    dispatch(userLoginRequest());
    try {
      let response = await fetch(
        `http://${IP}:4000/users/authenticate`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ staffusername, password }
          ),
        },
      );
      let json = await response.json();
      dispatch(userLoginSuccess(json));
    } catch (error) {
      dispatch(userLoginFailure(error));
    }
  };
};

export const fetchingStaffByIDRequest = () => ({type: FETCHING_STAFF_BYID_REQUEST});

export const fetchingStaffByIDSuccess = (json) => ({
  type: FETCHING_STAFF_BYID_SUCCESS,
  payload: json,
});

export const fetchingStaffByIDFailure = (error) => ({
  type: FETCHING_STAFF_BYID_FAILURE,
  payload: error,
});

export const fetchStaffByID = (staffID) => {
  return async dispatch => {
      dispatch(fetchingStaffByIDRequest());
      try{ 
          let response = await fetch(`http://${IP}:3000/get_staff_by_id/${staffID}`);
          let json = await response.json();
          dispatch(fetchingStaffByIDSuccess(json));
          // console.log(json);
      }
      catch(error){
          dispatch(fetchingStaffByIDFailure(error));
      }
   }
=======
import { FETCHING_STAFF_REQUEST, FETCHING_STAFF_SUCCESS, FETCHING_STAFF_FAILURE,
        DELETE_STAFF_REQUEST, DELETE_STAFF_SUCCESS, DELETE_STAFF_FAILURE,SWIPE_TO_CHOOSE_DELETEID, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE}
from './types';

<<<<<<< HEAD
import { authHeader } from '../../components/auth-header';

import { IP } from '../../components/IP';

=======
var ip = '192.168.1.16';
>>>>>>> main

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
<<<<<<< HEAD
            let response = await fetch('http:/'+ IP +':4000/api/staffs/getAllStaff');
=======
            let response = await fetch('http://' + ip + ':8080/api/staffs/getAllStaff');
>>>>>>> main
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
<<<<<<< HEAD
            let response = await fetch('http://'+ IP +':4000/api/staffs/deleteStaff/' + id,{
=======
            let response = await fetch('http://'+ ip +':8080/api/staffs/deleteStaff/' + id,{
>>>>>>> main
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

export const userLogin = () => {
    return async dispatch =>{
        dispatch(LoginRequest());
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            };
            return fetch('https://'+ IP +':4000/users/autheticate', requestOptions)
            .then(handleResponse)
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            });
            let json = await requestOptions.json();
            console.log(json)
            dispatch(LoginSuccess(json));
        }
        catch(error){
            dispatch(LoginFailure(error));
        }
    }
}

export const getAllStaffs = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('https://'+ IP +':3000/users', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
}