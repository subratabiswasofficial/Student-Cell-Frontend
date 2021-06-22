import { LOAD_ACHIEVEMENTS,DELETE_ACHIEVEMENT,ADD_ACHIEVEMENT } from "../actions/types";

const initialState = {
    achievements:null,
    loading:true
};

const studentSectionReducer = (state = initialState,action)=>{
    const {type,playload} = action;
    switch(type){
        case LOAD_ACHIEVEMENTS:
            return {
                achievements: playload,
                loading:false
            };
        case ADD_ACHIEVEMENT:
            return {
                achievements: [{...playload,id:state.achievements.length + 1},...state.achievements],
                loading:false
            };
            case DELETE_ACHIEVEMENT:
                return {
                    achievements: state.achievements.filter((achievement)=>achievement.id!==playload),
                    loading:false
                };
        default :
        return state;
    }
};

export default studentSectionReducer;