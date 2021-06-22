import { LOAD_ACHIEVEMENTS,DELETE_ACHIEVEMENT,ADD_ACHIEVEMENT } from "./types";
import achievementData from '../components/studentSection/achievementData';


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

export const addAchievement = ({formData})=>{
    return async (dispatch)=>{
        dispatch({
            type: ADD_ACHIEVEMENT,
            playload: formData,
          });
    }
}

//Add Achievement

export const deleteAchievement = ({ind})=>{
    return async (dispatch)=>{
        dispatch({
            type: DELETE_ACHIEVEMENT,
            playload: ind,
          });
    }
}