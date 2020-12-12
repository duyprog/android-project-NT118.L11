import { FETCHING_STAFF_REQUEST, FETCHING_STAFF_SUCCESS, FETCHING_STAFF_FAILURE,
        DELETE_STAFF_REQUEST, DELETE_STAFF_SUCCESS, DELETE_STAFF_FAILURE,SWIPE_TO_CHOOSE_DELETEID}
from './types';

// Fetch Staff
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
            let response = await fetch('http://192.168.1.9:8080/api/staffs/getAllStaff');
            let json = await response.json();
            console.log(json)
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
            let response = await fetch('http://192.168.1.9:8080/api/staffs/deleteStaff/' + id,{
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

