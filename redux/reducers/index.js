import {combineReducers} from 'redux';
import itemReducer from './ItemReducer';
<<<<<<< HEAD
import receiptDetailReducer from './receiptDetailReducer';
import receiptReducer from './receiptReducer';
import staffReducer from './staffReducer';
import tableReducer from './tableReducer';
import customerReducer from './customerReducer';
=======
import receiptReducer from './receiptReducer';
import staffReducer from './staffReducer';
import tableReducer from './tableReducer';
>>>>>>> af873c43444cc43d6c39e617380084db842988f0

const rootReducer = combineReducers({
 staffReducer:  staffReducer,
 tableReducer: tableReducer,
 itemReducer: itemReducer,
<<<<<<< HEAD
 receiptReducer: receiptReducer,
 receiptDetailReducer: receiptDetailReducer,
 customerReducer: customerReducer
=======
 receiptReducer: receiptReducer
>>>>>>> af873c43444cc43d6c39e617380084db842988f0
});

export default rootReducer;