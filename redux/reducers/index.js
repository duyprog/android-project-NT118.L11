import {combineReducers} from 'redux';
import itemReducer from './ItemReducer';
import staffReducer from './staffReducer';
import tableReducer from './tableReducer';

const rootReducer = combineReducers({
 staffReducer:  staffReducer,
 tableReducer: tableReducer,
 itemReducer: itemReducer,
});

export default rootReducer;