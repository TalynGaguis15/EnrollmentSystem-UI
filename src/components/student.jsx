import React,{ Component } from 'react';
import '../css/body.css';
import PropTypes from 'prop-types';
import {myFunction} from '../util/function.jsx'
import { getClassStudentURL } from '../util/url';
import axios from 'axios';


export default class Student extends Component{
    constructor(props){
        super (props);
          this.state = {
            classList:[{ id:'', units:'', classSize:'', courseCode:'',
                              courseName:'', schedule:'', location:'',
                              instructor:'' }]
            }
        }    
handleClass = e =>{
            e.preventDefault();
            let id = e.currentTarget.dataset.id;
            console.log(id);
            axios.get(getClassStudentURL + id).then(res => {
                this.setState({classList : res.data});
                console.log(res)
              }) 
             }

    render(){
        let studentsList = this.props.studentsList;
        let change = this.props.handleChangeInfo;
        let add = this.props.handleAddStudent;
        console.log(studentsList);

        return(
                <div>
                <article>
                    
                <select className='search' id='selected'>
                    <option value="Student ID">Student ID</option>
                    <option value="Name">Name</option>
                 </select>
                    <input type="text" className='search' id="myInput" onKeyUp={myFunction}
                     title="Type in a name"/>
                <table id='myTable'>
                <tbody>
                    <tr >
                        <th >Student ID</th>
                        <th >Name</th>
                        <th >Units</th>
                        <th >Course</th>
                        <th >BirthDate</th>
                    </tr>
                    {
                        studentsList.map(Student =>{
                            return (
                                <tr className="tr" data-id={Student.studentID} onClick={this.handleClass}>
                        <td >{Student.studentID}</td>
                        <td >{Student.firstName} {Student.middleName} {Student.lastName} </td>
                        <td >{Student.units}</td>
                        <td >{Student.course}</td>
                        <td >{Student.date}</td>
                    </tr>
                            )
                    })
                    }
                </tbody>
                </table>
                <table id='myTable' >
                <thead>
                </thead>
                <tbody>
                    <tr >
                        <th >Class ID</th>
                        <th >Course Code</th>
                        <th >Course Name</th>
                        <th >Instructor</th>
                        <th >Schedule</th>
                        <th >Location</th>
                        <th >Units</th>
                        <th> Class Size</th>

                    </tr>
                    {
                        this.state.classList.map((sched) =>{
                            return (
                                <tr className="tr">
                        <td >{sched.id}</td>
                        <td> {sched.courseCode} </td>
                        <td >{sched.courseName}</td>
                        <td >{sched.instructor}</td>
                        <td>{sched.schedule}</td>
                        <td >{sched.location}</td>
                        <td >{sched.units} </td>
                        <td> {sched.classSize} </td>
                    </tr>
                            )
                    })
                    }
                </tbody>
                </table>
                </article>
                <div className="article">
                <br></br>
                FirstName: <input type='text' name='firstName' placeholder="Enter FirstName..."  onChange={change}/>
                <br></br>
                MiddleName: <input type='text' name='middleName' placeholder="Enter MiddleName..."  onChange={change}/>
                <br></br>
                LastName: <input type='text' name='lastName' placeholder="Enter LastName..."  onChange={change}/>
                <br></br>
                {/* BirthDate: <input type='date' id='lname' name='lastName' placeholder="Enter LastName..."  onChange={this.props.handleChangeInfo}/> */}
                Total Units: <input type='text' name='units'  value='0' readOnly/>
                <br></br>
                Course: 
                <select  name='course' onChange={change}>
                <option value='BSIT'>BSIT</option>
                <option value='BSCS'>BSCS</option>
                <option value='ACT'>ACT</option>
                </select>
                <br></br>
                BirthDate: <input type='date' name='date' onChange={change}/>
                <br></br>
                <button type="submit" className="buttonsave-cancel" onClick={add}>Save</button>
                <button type="submit" className="buttonsave-cancel">Cancel</button>
                </div>
                </div>
        );
    }
}
Student.propTypes = {
    studentsList: PropTypes.array,
    handleChangeInfo: PropTypes.func,
    handleAddStudent: PropTypes.func,
    handleClass: PropTypes.func
}