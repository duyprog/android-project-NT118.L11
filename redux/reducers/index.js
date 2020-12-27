import {combineReducers} from 'redux';

import staffReducer from './staffReducer';
import tableReducer from './tableReducer';

const rootReducer = combineReducers({
 staffReducer:  staffReducer,
 tableReducer: tableReducer
});

export default rootReducer;