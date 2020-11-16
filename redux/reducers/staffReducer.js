import { FETCHING_STAFF_REQUEST, FETCHING_STAFF_SUCCESS, FETCHING_STAFF_FAILURE} from '../actions/types';

const initialState = {
    refreshing: false,
    staff: []
};

const staffReducer = (state=initialState, action) =>{
    switch(action.type) {
        case FETCHING_STAFF_REQUEST: 
            return{ ...state, refreshing: true};
        case FETCHING_STAFF_FAILURE:
            return{...state, refreshing: false};
        case FETCHING_STAFF_SUCCESS:
            return {...state, refreshing: false, staff: action.payload};
        default:
            return state;
    }
}

export default staffReducer;