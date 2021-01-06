import {
  FETCHING_CUSTOMER_REQUEST,
  FETCHING_CUSTOMER_FAILURE,
  FETCHING_CUSTOMER_SUCCESS,
  CHOOSE_CUSTOMER,
} from '../actions/types';

const initialState = {
  customerData: {
    refreshing: false,
    customer_name: [],
    phone: [],
    choosedCustomer: '',
  },
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CUSTOMER_REQUEST:
      return {
        ...state,
        customerData: {...state.customerData, refreshing: true},
      };
    case FETCHING_CUSTOMER_SUCCESS:
      return {
        ...state,
        customerData: {
          ...state.customerData,
          refreshing: false,
        },
      };
    case FETCHING_CUSTOMER_FAILURE:
      return {
        ...state,
        customerData: {
          ...state.customerData,
          refreshing: false,
        },
      };
      case CHOOSE_A_CUSTOMER:
        return {
          ...state,
          customerData: {
            ...state.customerData,
            choosedCustomer: action.payload,
          },
        };
    default:
      return state;
  }
};

export default customerReducer;
