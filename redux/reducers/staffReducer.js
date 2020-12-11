import { FETCHING_STAFF_REQUEST, FETCHING_STAFF_SUCCESS, FETCHING_STAFF_FAILURE,
    DELETE_STAFF_REQUEST, DELETE_STAFF_SUCCESS, DELETE_STAFF_FAILURE, SWIPE_TO_CHOOSE_DELETEID}
from '../actions/types';
const initialState = {
    refreshing: false,
    staff: [],
    deleteID: ''
};

const staffReducer = (state=initialState, action) =>{
    switch(action.type) {
        case FETCHING_STAFF_REQUEST: 
            return { ...state, refreshing: true};
        case FETCHING_STAFF_FAILURE:
            return {...state, refreshing: false};
        case FETCHING_STAFF_SUCCESS:
            return {...state, refreshing: false, staff: action.payload};
        case DELETE_STAFF_REQUEST:
            return { ...state, refreshing: true };
        case DELETE_STAFF_SUCCESS: 
            return {...state, refreshing: false};
        case DELETE_STAFF_FAILURE:
            return {...state, refreshing: false};
        case SWIPE_TO_CHOOSE_DELETEID:{
            return {...state}
        }
        default:
            return state;
    }
}

export default staffReducer;