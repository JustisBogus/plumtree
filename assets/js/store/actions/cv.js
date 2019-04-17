import { ADD_NAME,
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
         ADD_EDUCATION_TITLE} from './actionTypes';

export const addName = (name) => {
    return {
        type: ADD_NAME,
        name : name
    };
};

export const addEmail = (email) => {
    return {
        type: ADD_EMAIL,
        email : email
    };
};

export const addAddress = (address) => {
    return {
        type: ADD_ADDRESS,
        address: address
    };
};

export const addAbout = (about) => {
    return {
        type: ADD_ABOUT,
        about: about
    };
};

export const addJob = (newJob) => {
    return {
        type: ADD_JOB,
        newJob: newJob
    };
};

export const deleteJob = (deletedJob) => {
    return {
        type: DELETE_JOB,
        deletedJob: deletedJob
    };
};

export const addStartYear = (year) => {
    return {
        type: ADD_START_YEAR,
        year: year
    };
};

export const addStopYear = (year) => {
    return {
        type: ADD_STOP_YEAR,
        year: year
    };
};

export const addJobTitle = (title) => {
    return {
        type: ADD_JOB_TITLE,
        title: title
    };
};

export const addJobDescription = (description) => {
    return {
        type: ADD_JOB_DESCRIPTION,
        description: description
    };
};

export const addSkill = (newSkill) => {
    return {
        type: ADD_SKILL,
        newSkill: newSkill
    };
};

export const deleteSkill = (deletedSKill) => {
    return {
        type: DELETE_SKILL,
        deletedSkill: deletedSKill
    };
};

export const addSkillTitle = (skill) => {
    return {
        type: ADD_SKILL_TITLE,
        skill: skill
    };
};

export const addEducation = (newEducation) => {
    return {
        type: ADD_EDUCATION,
        newEducation: newEducation
    };
};

export const deleteEducation = (deletedEducation) => {
    return {
        type: DELETE_EDUCATION,
        deletedEducation: deletedEducation
    };
};

export const addEducationStartYear = (year) => {
    return {
        type: ADD_EDUCATION_START_YEAR,
        year: year
    };
};

export const addEducationStopYear = (year) => {
    return {
        type: ADD_EDUCATION_STOP_YEAR,
        year: year
    };
};

export const addEducationTitle = (education) => {
    return {
        type: ADD_EDUCATION_TITLE,
        education: education
    };
};