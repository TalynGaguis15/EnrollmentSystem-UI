import {getStudentURL, getClassURL, getInstructorURL, getScheduleURL} from './url.js';
import axios from 'axios';

//----- Student Information -----//
const getStudentList = () => {
    return axios.get(getStudentURL);
}

//----- Class information -----//
const getClassList = () => {
    return axios.get(getClassURL);
}

//----- Instructor Information -----//
const getInstructorList = () => {
    return axios.get(getInstructorURL);
}

//----- Schedule Information -----//

const getScheduleList = () =>{
    return axios.get(getScheduleURL)
}
export {
    getStudentList, getClassList, getInstructorList, getScheduleList

}