import React,{ Component } from 'react';
import '../css/body.css';
import PropTypes from 'prop-types';
import {myFunction} from '../util/function.jsx'
import axios from 'axios';
import { getScheduleURL } from '../util/url';


export default class ClassList extends Component{
    constructor(props){
        super (props);
          this.state = {
            scheduleList: [{ studentID: '', units:'', firstName:'', 
                              lastName:'', middleName:'', course:'' }],
            schedule:[],
            id: ''
            }
      }
    handleSchedule= e =>{
        e.preventDefault();
        let id = e.currentTarget.dataset.id;

        this.state.id = e.currentTarget.dataset.id;
        // this.setState({id: e.currentTarget.dataset.id});

        // console.log(e.currentTarget.dataset.id);
        // console.log(this.state.id);

        axios.get(getScheduleURL + id).then(res => {
            this.setState({scheduleList : res.data});
            console.log(res)
          }) 
    }
    handleDelete = e =>{
        e.preventDefault();
        //let scheduleList = this.props.scheduleList;
        let studid = e.currentTarget.dataset.id;
        let classid = this.state.id

        console.log(e.currentTarget.dataset.id);
        console.log(this.state.id);

        axios.delete('http://localhost:8080/trialDynamic/rest/schedule?classid='+ classid +'&studentid=' + studid ).then(res => {
            console.log(res)
            window.location.reload();
          }) 
    }

    // handleClick(event)
    // {
    //     // console.log(event.target.value);
    //     let id = event.currentTarget.dataset.id;
    //     // console.log(id);

    //     axios.get(getScheduleURL + id).then(res => {
    //         this.setState({scheduleList : res.data});
    //         console.log(res)
    //       }) 
    // }
    
    render(){
        let classList = this.props.classList;   
        let schedule = this.state.scheduleList;
        console.log(classList);
         return(
                <div>
                <article className='body'>
                    <select className='search' id='selected'>
                    <option value="Class ID">Class ID</option>
                    <option value="Course Code">Course Code</option>
                    <option value="Course Name">Course Name</option>
                    <option value="Instructor">Instructor</option>
                  </select>
                    <input  className='search' type="text" id="myInput" onKeyUp={myFunction}/>
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
                        classList.map((sched) =>{
                            return (
                                <tr className="tr" data-id={sched.id} onClick={this.handleSchedule}>
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
                <table id='myTable'>
                <thead>
                </thead>
                <tbody>
                    <tr >
                    <th >Student ID</th>
                        <th >Name</th>
                        <th >Units</th>
                        <th >Course</th>
                        <th ></th>
                    </tr>
                       {schedule.map((s, index) =>{
                            return (
                                <tr className="tr">
                        <td >{s.studentID}</td>
                        <td >{s.firstName} {s.middleName} {s.lastName} </td>
                        <td >{s.units}</td>
                        <td >{s.course}</td>
                         <td> <button className='button-remove' type='button' data-id={s.studentID} onClick={this.handleDelete} >Unenroll</button></td>
                    </tr>
                            )
                    })
                    }  
                </tbody>
                </table>
                </article>
                </div>
        );
    }
}
ClassList.propTypes = {
    classList: PropTypes.array,
    scheduleList: PropTypes.array,
    removeStudent: PropTypes.func,
    handleSchedule: PropTypes.func


}