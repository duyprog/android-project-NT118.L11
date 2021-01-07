import {
  FETCHING_CUSTOMER_REQUEST,
  FETCHING_CUSTOMER_SUCCESS,
  FETCHING_CUSTOMER_FAILURE,
  INSERT_CUSTOMER_REQUEST,
  INSERT_CUSTOMER_SUCCESS,
  INSERT_CUSTOMER_FAILURE,
  CHOOSE_PICKUP,
  CHOOSE_AT_STORE,
} from './types';

import {IP} from '../../components/IP';

export const fetchingCustomerRequest = () => ({
  type: FETCHING_CUSTOMER_REQUEST,
});

export const fetchingCustomerSuccess = (json) => ({
  type: FETCHING_CUSTOMER_SUCCESS,
  payload: json,
});

export const fetchingCustomerFailure = (error) => ({
  type: FETCHING_CUSTOMER_FAILURE,
  payload: error,
});

export const insertCustomerRequest = () => ({
  type: INSERT_CUSTOMER_REQUEST,
});

export const insertCustomerSuccess = (json) => ({
  type: INSERT_CUSTOMER_SUCCESS,
  payload: json,
});

export const insertCustomerFailure = (err) => ({
  type: INSERT_CUSTOMER_FAILURE,
  payload: err,
});

export const choosePickup = () => ({
  type: CHOOSE_PICKUP,
});
export const chooseAtStore = () => ({
  type: CHOOSE_AT_STORE,
});

export const customerChoosePickup = () => {
  return async (dispatch) => {
    await dispatch(choosePickup());
  };
};

export const customerChooseAtStore = () => {
  return async (dispatch) => {
    await dispatch(chooseAtStore());
  };
};

export const fetchCustomer = () => {
  return async (dispatch) => {
    dispatch(fetchingCustomerRequest());
    try {
      let response = await fetch('http://' + IP + ':3000/get_all_customer/');
      let json = await response.json();
      dispatch(fetchingCustomerSuccess(json));
    } catch (error) {
      dispatch(fetchingCustomerFailure(error));
    }
  };
};

// export const fetchCustomerById = (customerID) => {
//     return async dispatch => {
//         dispatch(fetchingCustomerRequest());
//         try {
//             let response = await fetch('http://'+ IP + ':3000/get_customer_by_id/' + customerID);
//             let json = await response.json();
//             dispatch(fetchingCustomerSuccess(json));
//         } catch (error) {
//             dispatch(fetchingCustomerFailure(error));
//         }
//     }
// }

export const insertNewCustomer = (customer_name, phone) => {
  return async (dispatch) => {
    dispatch(insertCustomerRequest());
    try {
      let response = await fetch(
        `http://${IP}:3000/insert_new_customer/${customer_name}/${phone}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({customer_name, phone}),
        },
      );
      let json = await response.json();
      dispatch(insertCustomerSuccess(json));
    } catch (error) {
      dispatch(insertCustomerFailure(error));
    }
  };
};
