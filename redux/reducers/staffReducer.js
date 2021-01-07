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
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  FETCHING_STAFF_BYID_REQUEST,
  FETCHING_STAFF_BYID_SUCCESS,
  FETCHING_STAFF_BYID_FAILURE,
  SWIPE_TO_CHOOSE_DELETEID,
} from '../actions/types';
const initialState = {
  staffData: {
    refreshing: false,
    staff: [],
    userToken: 'token123456',
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
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        staffData: {
          ...state.staffData,
          refreshing: true,
        },
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        staffData: {
          ...state.staffData,
          refreshing: false,
        },
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        staffData: {
          ...state.staffData,
          refreshing: false,
        },
      };
    case INSERT_STAFF_REQUEST:
      return {
        ...state,
        staffData: {
          ...state.staffData,
          refreshing: true,
        },
      };
    case INSERT_STAFF_SUCCESS:
      return {
        ...state,
        staffData: {
          ...state.staffData,
          refreshing: false,
        },
      };
    case INSERT_STAFF_FAILURE:
      return {
        ...state,
        staffData: {
          ...state.staffData,
          refreshing: false,
        },
      };
    case SWIPE_TO_CHOOSE_DELETEID: {
      return {...state, staffData: {...state.staffData, refreshing: false}};
    };
    case FETCHING_STAFF_BYID_REQUEST:
      return {
        ...state,
        staffData: {
          ...state.staffData,
          refreshing: true,
        }
      };
      case FETCHING_STAFF_BYID_SUCCESS:
      return {
        ...state,
        staffData: {
          ...state.staffData,
          refreshing: false,
          staff: action.payload
        }
      };
      case FETCHING_STAFF_BYID_FAILURE:
      return {
        ...state,
        staffData: {
          ...state.staffData,
          refreshing: false,
        }
      };
    default:
      return state;
  }
};

export default staffReducer;
