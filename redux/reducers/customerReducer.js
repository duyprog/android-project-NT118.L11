import {
<<<<<<< HEAD
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
=======
    FETCHING_CUSTOMER_REQUEST,
    FETCHING_CUSTOMER_FAILURE,
    FETCHING_CUSTOMER_SUCCESS,
    INSERT_CUSTOMER_REQUEST,
    INSERT_CUSTOMER_SUCCESS,
    INSERT_CUSTOMER_FAILURE,
    CHOOSE_PICKUP,
    CHOOSE_AT_STORE,
  } from '../actions/types';
  
  const initialState = {
    customerData: {
        refreshing: false,
        customer: [], 
        isAtStore: true,
    }
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
            customer: action.payload
          },
        };
      case FETCHING_CUSTOMER_FAILURE:
>>>>>>> main
        return {
          ...state,
          customerData: {
            ...state.customerData,
<<<<<<< HEAD
            choosedCustomer: action.payload,
          },
        };
    default:
      return state;
  }
};

export default customerReducer;
=======
            refreshing: false,
          },
        };
        case INSERT_CUSTOMER_REQUEST: 
            return{ 
                ...state, 
                customerData: { 
                    ...state.customerData, 
                    refreshing: true 
                }
            }
        case INSERT_CUSTOMER_SUCCESS: 
            return{ 
                ...state, 
                cutomerData: {
                    ...state.customerData, 
                    refreshing: false
                }
            }
        case INSERT_CUSTOMER_FAILURE: 
            return{
                ...state, 
                customerData: {
                    ...state.customerData, 
                    refreshing: false
                }
            }
        case CHOOSE_PICKUP: 
            return {
                ...state, 
                customerData: {
                    ...state.customerData,
                    refresing: false,
                    isAtStore: false 
                }
            }
        case CHOOSE_AT_STORE: 
            return {
                ...state, 
                customerData: {
                    ...state.customerData, 
                    refresing: false,
                    isAtStore: true,
                }
            }       
      default:
        return state;
    }
  };
  
  export default customerReducer;
>>>>>>> main
