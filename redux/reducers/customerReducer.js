import {
    FETCHING_CUSTOMER_REQUEST,
    FETCHING_CUSTOMER_FAILURE,
    FETCHING_CUSTOMER_SUCCESS,
    INSERT_CUSTOMER_REQUEST,
    INSERT_CUSTOMER_SUCCESS,
    INSERT_CUSTOMER_FAILURE,
    CHOOSE_PICKUP,
    CHOOSE_AT_STORE,
    FETCHING_CURRENT_CUSTOMER_R,
    FETCHING_CURRENT_CUSTOMER_S,
    FETCHING_CURRENT_CUSTOMER_F,
  } from '../actions/types';
  
  const initialState = {
    customerData: {
        refreshing: false,
        customer: [], 
        isAtStore: true,
        currentCustomerId: ''
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
        return {
          ...state,
          customerData: {
            ...state.customerData,
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
        case FETCHING_CURRENT_CUSTOMER_R:{
          return {
            ...state, 
            customerData:{
              ...state.customerData, 
              refreshing: true,
            }
          }
        } 
        case FETCHING_CURRENT_CUSTOMER_S:{
          return{
            ...state, 
            customerData:{
              ...state.customerData,
              refresing: false, 
              currentCustomerId: action.payload
            }
          }
        }
        case FETCHING_CURRENT_CUSTOMER_F: {
          return {
            ...state, 
            customerData:{
              ...state.customerData, 
              refreshing: false,
            }
          }
        } 
      default:
        return state;
    }
  };
  
  export default customerReducer;
