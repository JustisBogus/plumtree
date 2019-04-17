import {
    ADD_NAME,
    ADD_EMAIL,
    ADD_ADDRESS,
    ADD_ABOUT,
    ADD_JOB,
    DELETE_JOB,
    ADD_START_YEAR,
    ADD_STOP_YEAR,
    ADD_JOB_TITLE,
    ADD_JOB_DESCRIPTION,
    ADD_SKILL,
    DELETE_SKILL,
    ADD_SKILL_TITLE,
    ADD_EDUCATION,
    DELETE_EDUCATION,
    ADD_EDUCATION_START_YEAR,
    ADD_EDUCATION_STOP_YEAR,
    ADD_EDUCATION_TITLE
} from '../actions/actionTypes';

const initialState = {
    cv: {
        name:'',
        email:'',
        address:'',
    },
    jobs:[],
    skills:[],
    education:[]

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NAME:
            return {
                ...state,
                cv: action.name,
            };
        case ADD_EMAIL:
            return {
                ...state,
                cv: action.email,
            };
        case ADD_ADDRESS:
            return {
                ...state,
                cv: action.address,
            };
        case ADD_ABOUT:
            return {
                ...state,
                cv: action.about,
            };
        case ADD_JOB:
            return {
                ...state,
               jobs: state.jobs.concat(action.newJob)
            };
        case DELETE_JOB:
            return {
                ...state,
                jobs: action.deletedJob
            };
        case ADD_START_YEAR:
            return {
                ...state,
                jobs: action.year
            };
        case ADD_STOP_YEAR:
            return {
                ...state,
                jobs: action.year
            };
        case ADD_JOB_TITLE:
            return {
                ...state,
                jobs: action.title
            };
        case ADD_JOB_DESCRIPTION:
            return {
                ...state,
                jobs: action.description
            };
        case ADD_SKILL:
            return {
                ...state,
                skills: state.skills.concat(action.newSkill)
            };
        case DELETE_SKILL:
            return {
                ...state,
                skills: action.deletedSkill
            };
        case ADD_SKILL_TITLE:
            return {
                ...state,
                skills: action.skill
            };
        case ADD_EDUCATION:
            return {
                ...state,
                education: state.education.concat(action.newEducation)
            };
        case DELETE_EDUCATION:
            return {
                ...state,
                education: action.deletedEducation
            };
        case ADD_EDUCATION_START_YEAR:
            return {
                ...state,
                education: action.year
            };
        case ADD_EDUCATION_STOP_YEAR:
            return {
                ...state,
                education: action.year
            };
        case ADD_EDUCATION_TITLE:
            return {
                ...state,
                education: action.education
            };
        default:
            return state;
    }
};

export default reducer;