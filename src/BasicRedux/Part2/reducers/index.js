import {combineReducers} from 'redux';
import calReducer from './cal.reducer';
import crudReducer from './crud.reducer';

export default combineReducers({calReducer, crudReducer});
