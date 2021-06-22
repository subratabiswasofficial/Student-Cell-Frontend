import { combineReducers } from 'redux';
import { auth } from './auth';
import studentSectionReducer from './studentSection';

export default combineReducers({
    auth,
    studentSection:studentSectionReducer
});
