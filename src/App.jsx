import React, {Component} from 'react';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './components/home.jsx';
import {getStudentList, getClassList, getInstructorList, getScheduleList} from './util/helper.js';
import axios from 'axios';
import { getStudentURL, getClassURL, getInstructorURL } from './util/url';


export default class App extends Component{
  constructor(props){
    super (props);
      this.state = {
        studentsList: [{ studentID: '', units:'', firstName:'', 
                          lastName:'', middleName:'', course:'', date:''}],
        classList:[{ id:'', units:'', classSize:'', courseCode:'',
                          courseName:'', schedule:'', location:'',
                          instructor:'' }],
        instructorList:[{id:'', firstName:'', middleName:'', lastName:''}],
        student:[],
        instructor:[],
        schedule:[]
        }
     
  }
  handleChangeSchedule = e => {
    const {name, value} = e.target;
    console.log(name);
    console.log(value);
    this.setState((prevState) => ({
      schedule: {
        ...prevState.schedule,
        [name]: value
      }
    }));
  }
  handleAddSchedule = e => {
    let schedule = this.state.schedule;
    let classList = [...this.state.classList];
    classList.push(schedule)
    this.setState({classList : classList});
    e.preventDefault();
    console.log("POST");
    console.log(classList);
    let headers = {'Content-Type' : 'application/json',}
    axios.post(getClassURL, schedule, {headers: headers}).then(res => {
           console.log(res.data);
           window.location.reload();
           console.log(classList);
         });
  }
  handleChangeInfo = e => {
    const {name, value} = e.target;
    console.log(name);
    console.log(value);
    this.setState((prevState) => ({
      student: {
        ...prevState.student,
        [name]: value
      }
    }));
  }
  handleAddStudent = e => {
    let student = this.state.student;
    let studentsList = [...this.state.studentsList];
    studentsList.push(student)
    this.setState({studentsList : studentsList});
    e.preventDefault();
    console.log("POST");
    console.log(studentsList);
    let headers = {'Content-Type' : 'application/json',}
    axios.post(getStudentURL, student, {headers: headers}).then(res => {
           console.log(res.data);
           window.location.reload();
         });
  }
  handleChangeProf = e => {
    const {name, value} = e.target;
    console.log(name);
    console.log(value);
    this.setState((prevState) => ({
      instructor: {
        ...prevState.instructor,
        [name]: value
      }
    }));
  }
  handleAddInstructor = e => {
    let instructor = this.state.instructor;
    let instructorList = [...this.state.instructorList];
    instructorList.push(instructor)
    this.setState({instructorList : instructorList});
    e.preventDefault();
    console.log("POST");
    console.log(instructorList);
    console.log(instructor);
    let headers = {'Content-Type' : 'application/json',}
    axios.post(getInstructorURL, instructor, {headers: headers}).then(res => {
           console.log(res.data);
           window.location.reload();
         });
        }
removeStudent = rowIndex => {
          
          let scheduleList = [...this.state.scheduleList];
      
          scheduleList.splice(rowIndex, 1);
      
          this.setState({scheduleList: scheduleList});
          let headers = {'Content-Type' : 'application/json',}
          axios.delete('' , {headers: headers}).then(res => {
           console.log(res.data);
         });

}

getStudents() {
    getStudentList().then(res => {
      this.setState({studentsList : res.data});
    }) 
  }
getClass(){
  getClassList().then(res => {
    this.setState({classList : res.data});
  }) 
}
getInstructor(){
  getInstructorList().then(res =>{
    this.setState({instructorList : res.data})
  })
}
getSchedule(){
  getScheduleList().then(res =>{
    this.setState({scheduleList: res.data})
  });
}
componentDidMount() {
    this.getStudents(); this.getClass(); this.getInstructor(); this.getSchedule();
  }
componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    console.log('classList:' );
    console.log(this.state.studentsList , this.state.classList, this.state.instructorList, this.state.scheduleList,
      this.state.handleAddInstructor, this.state.handleChangeProf);

    return(
    <div >
      <Header/>
      <Home studentsList={this.state.studentsList} classList={this.state.classList} 
      instructorList={this.state.instructorList} 
       handleAddStudent={this.handleAddStudent} handleChangeInfo={this.handleChangeInfo}
       handleAddInstructor={this.handleAddInstructor} handleChangeProf={this.handleChangeProf}
       handleAddSchedule={this.handleAddSchedule} handleChangeSchedule={this.handleChangeSchedule}/><Footer/>
    </div>
  );
  }
}
