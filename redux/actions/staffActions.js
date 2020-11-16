import { FETCHING_STAFF_REQUEST, FETCHING_STAFF_SUCCESS, FETCHING_STAFF_FAILURE} from './types';

export const fetchingStaffRequest = () =>({type: FETCHING_STAFF_REQUEST});

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
            let response = await fetch('http://192.168.1.7:8080/api/staffs/getAllStaff');
            let json = await response.json();
            dispatch(fetchingStaffSuccess(json));
        }
        catch(error){
            dispatch(fetchingStaffFailure(error));
        }
    }
}

