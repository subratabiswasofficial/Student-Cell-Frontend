import { combineReducers } from 'redux';
import { auth } from './auth';
import studentSectionReducer from './studentSection';
import { alert } from './alert';

export default combineReducers({
    auth,
    studentSection: studentSectionReducer,
    alert
});
