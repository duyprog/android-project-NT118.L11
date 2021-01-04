import { FETCHING_STAFF_REQUEST, FETCHING_STAFF_SUCCESS, FETCHING_STAFF_FAILURE,
    DELETE_STAFF_REQUEST, DELETE_STAFF_SUCCESS, DELETE_STAFF_FAILURE, SWIPE_TO_CHOOSE_DELETEID, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS}
from '../actions/types';

const initialState = {
  staffData:{
    refreshing: false,
    staff: [],
    deleteID: ''
  }
};

const staffReducer = (state=initialState, action) =>{
    switch(action.type) {
        case LOGIN_REQUEST:
            return { ...state, refreshing: true};
        case LOGIN_FAILURE:
            return { ...state, refreshing: false};
        case LOGIN_SUCCESS:
            return { ...state, refreshing: false, staff: action.payload};        
        case FETCHING_STAFF_REQUEST: 
            return {...state, 
                staffData:{...state.staffData, 
                refreshing: true, 
            }};
        case FETCHING_STAFF_FAILURE:
            return {...state, 
                staffData:{...state.staffData, 
                refreshing: false, 
            }};
        case FETCHING_STAFF_SUCCESS:
            return {...state, 
                    staffData:{...state.staffData, 
                    refreshing: false, 
                    staff: action.payload}};
        case DELETE_STAFF_REQUEST:
            return {...state, 
                staffData:{...state.staffData, 
                refreshing: true, 
            }};
        case DELETE_STAFF_SUCCESS: 
        return {...state, 
            staffData:{...state.staffData, 
            refreshing: false, 
        }};
        case DELETE_STAFF_FAILURE:
            return {...state, 
                staffData:{...state.staffData, 
                refreshing: false, 
            }};
        case SWIPE_TO_CHOOSE_DELETEID:{
            return {...state, 
                staffData:{...state.staffData, 
                refreshing: false, 
            }};        }
        default:
            return state;
    }
}

export default staffReducer;