import {combineReducers} from 'redux';
import itemReducer from './ItemReducer';
import receiptDetailReducer from './receiptDetailReducer';
import receiptReducer from './receiptReducer';
import staffReducer from './staffReducer';
import tableReducer from './tableReducer';
import customReducer from './customerReducer';

const rootReducer = combineReducers({
 staffReducer:  staffReducer,
 tableReducer: tableReducer,
 itemReducer: itemReducer,
 receiptReducer: receiptReducer,
 receiptDetailReducer: receiptDetailReducer,
 customReducer: customReducer
});

export default rootReducer;