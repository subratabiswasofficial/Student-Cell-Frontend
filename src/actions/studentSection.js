import { LOAD_ACHIEVEMENTS,DELETE_ACHIEVEMENT,ADD_ACHIEVEMENT } from "./types";
import achievementData from '../components/studentSection/achievementData';
import { setAlert } from './alert';



// Load Achievements
export const loadAchievement = ()=>{
    return async (dispatch)=>{
        dispatch({
            type: LOAD_ACHIEVEMENTS,
            playload: achievementData,
          });
    }
}

//Add Achievement

export const addAchievement = (formData)=>{
    return (dispatch)=>{
        dispatch({
            type: ADD_ACHIEVEMENT,
            playload: formData,
          });
        dispatch(setAlert('Achievement Added!', 'success'));
    }
}

//Delete Achievement

export const deleteAchievement = (id)=>{
    return async (dispatch)=>{
        dispatch({
            type: DELETE_ACHIEVEMENT,
            playload: id,
          });
          dispatch(setAlert('Achievement Deleted!', 'success'));
    }
}