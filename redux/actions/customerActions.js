import {
    FETCHING_CUSTOMER_REQUEST, FETCHING_CUSTOMER_SUCCESS, FETCHING_CUSTOMER_FAILURE
} from './types';

import {IP} from '../../components/IP'

export const fetchingCustomerRequest = () => ({
    type: FETCHING_CUSTOMER_REQUEST,
});

export const fetchingCustomerSuccess = (json) => ({
    type: FETCHING_CUSTOMER_SUCCESS, 
    payload: json
});

export const fetchingCustomerFailure = (error) =>({
    type: FETCHING_CUSTOMER_FAILURE, 
    payload: error
});

export const fetchCustomerById = (customerID) => {
    return async dispatch => {
        dispatch(fetchingCustomerRequest());
        try {
            let response = await fetch('http://'+ IP + ':3000/get_customer_by_id/' + customerID);
            let json = await response.json();
            dispatch(fetchingCustomerSuccess(json));
        } catch (error) {
            dispatch(fetchingCustomerFailure(error));
        }
    }
}



