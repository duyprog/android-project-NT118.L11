<<<<<<< HEAD
import { FETCHING_STAFF_REQUEST, FETCHING_STAFF_SUCCESS, FETCHING_STAFF_FAILURE,
    DELETE_STAFF_REQUEST, DELETE_STAFF_SUCCESS, DELETE_STAFF_FAILURE, SWIPE_TO_CHOOSE_DELETEID, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS}
from '../actions/types';

=======
import {
  FETCHING_STAFF_REQUEST,
  FETCHING_STAFF_SUCCESS,
  FETCHING_STAFF_FAILURE,
  DELETE_STAFF_REQUEST,
  DELETE_STAFF_SUCCESS,
  DELETE_STAFF_FAILURE,
  INSERT_STAFF_REQUEST,
  INSERT_STAFF_SUCCESS,
  INSERT_STAFF_FAILURE,
  SWIPE_TO_CHOOSE_DELETEID,
} from '../actions/types';
>>>>>>> main
const initialState = {
  staffData: {
    refreshing: false,
    staff: [],
<<<<<<< HEAD
    staffusername: '',
    password: '',
    deleteID: ''
  }
};

const staffReducer = (state=initialState, action) =>{
    switch(action.type) {
        case LOGIN_REQUEST:
            return { ...state.staffData, refreshing: true};
        case LOGIN_FAILURE:
            return { ...state.staffData, refreshing: false};
        case LOGIN_SUCCESS:
            return { ...state.staffData, refreshing: false, staff: action.payload};        
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
=======
    deleteID: '',
  },
};

const staffReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_STAFF_REQUEST:
      return {...state, staffData: {...state.staffData, refreshing: true}};
    case FETCHING_STAFF_FAILURE:
      return {...state, staffData: {...state.staffData, refreshing: false}};
    case FETCHING_STAFF_SUCCESS:
      return {
        ...state,
        staffData: {
          ...state.staffData,
          refreshing: false,
          staff: action.payload,
        },
      };
    case DELETE_STAFF_REQUEST:
      return {...state, staffData: {...state.staffData, refreshing: true}};
    case DELETE_STAFF_SUCCESS:
      return {...state, staffData: {...state.staffData, refreshing: false}};
    case DELETE_STAFF_FAILURE:
      return {...state, staffData: {...state.staffData, refreshing: false}};
    case INSERT_STAFF_REQUEST:
      return {
        ...state,
        customerData: {
          ...state.customerData,
          refreshing: true,
        },
      };
    case INSERT_STAFF_SUCCESS:
      return {
        ...state,
        cutomerData: {
          ...state.customerData,
          refreshing: false,
        },
      };
    case INSERT_STAFF_FAILURE:
      return {
        ...state,
        customerData: {
          ...state.customerData,
          refreshing: false,
        },
      };
    case SWIPE_TO_CHOOSE_DELETEID: {
      return {...state, staffData: {...state.staffData, refreshing: false}};
>>>>>>> main
    }
    default:
      return state;
  }
};

export default staffReducer;
