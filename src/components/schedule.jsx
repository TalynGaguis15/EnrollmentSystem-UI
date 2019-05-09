import React,{ Component } from 'react';
import '../css/body.css';
import PropTypes from 'prop-types';
import {myFunction} from '../util/function.jsx'


export default class Schedule extends Component{
    
    render(){
        let instructorList = this.props.instructorList;
        let classList = this.props.classList;
        let change = this.props.handleChangeSchedule;
        let add = this.props.handleAddSchedule;
        console.log('BODY COMPONENT');
        console.log( instructorList, add);

       

        return(
            <div>
            <article>
            <select className='search' id='selected'>
                    <option value="Class ID">Class ID</option>
                    <option value="Course Code">Course Code</option>
                    <option value="Course Name">Course Name</option>
                    <option value="Instructor">Instructor</option>
            </select>
                    <input  className='search' type="text" id="myInput" onKeyUp={myFunction}
                     title="Type in a name"/>

                <table id='myTable'>
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
                        classList.map(sched =>{
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
                 Course Code: <input type='text' name='courseCode' placeholder="Enter Course Name..." onChange={change}/>
                <br></br>
                Course Name: <input type='text' name='courseName' placeholder="Enter Course Code..." onChange={change}/>
                <br></br>
                Instructor:  
                <select name='instructor' onClick={change}>
                <option>Select Instructor</option>
                {instructorList.map((prof, i) =>
                <option key={i} value= {prof.lastName}>{prof.firstName} {prof.middleName} {prof.lastName}</option>)}
                </select>
                Schedule: <input type='text' name='schedule' placeholder="Enter Schedule..." onChange={change}/>
                <br></br>
                Location: <input type='text' name='location' placeholder="Enter Location..." onChange={change}/>
                <br></br>
                Class Size: <input type='text' name='classSize' value='0' readOnly />
                <br></br>
                Units: 
                <input type="text"  name='units' placeholder="Enter Units" onChange={change}/>

                <br></br>
                 <button type="submit" className="buttonsave-cancel" onClick={add}>Save</button>
                 <button type="submit" className="buttonsave-cancel">Cancel</button>
                 </div>
                </div>
        );
    }
}
Schedule.propTypes = {
    classList: PropTypes.array,
    instructorList: PropTypes.array,
    handleChangeSchedule: PropTypes.func,
    handleAddSchedule: PropTypes.func
}

