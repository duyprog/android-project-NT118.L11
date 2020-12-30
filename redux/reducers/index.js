import {combineReducers} from 'redux';
import itemReducer from './ItemReducer';
import receiptReducer from './receiptReducer';
import staffReducer from './staffReducer';
import tableReducer from './tableReducer';

const rootReducer = combineReducers({
 staffReducer:  staffReducer,
 tableReducer: tableReducer,
 itemReducer: itemReducer,
 receiptReducer: receiptReducer
});

export default rootReducer;