import { USER_LOADED, AUTH_ERROR } from '../actions/types';

export const loadUser = () => {
    return (dispatch) => {
        try {
            dispatch({
                type: USER_LOADED,
                playload: { name: 'manas rajowar', dept: 'ECE' }
            });
        } catch (err) {
            dispatch({
                type: AUTH_ERROR
            });
        }
    };
};
