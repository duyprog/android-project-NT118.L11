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