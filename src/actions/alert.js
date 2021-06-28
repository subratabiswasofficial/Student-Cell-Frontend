import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

export const setAlert = (msg, variant) => {
    return (dispatch) => {
        const id = uuidv4();
        dispatch({
            type: SET_ALERT,
            playload: {
                id,
                msg,
                variant
            }
        });

        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERT,
                playload: id
            });
        }, 100);
    };
};
