import React,{ Component } from 'react';
import '../css/body.css';
import PropTypes from 'prop-types';


class Body extends Component{
    render(){
        let studentsList = this.props.studentsList;
        console.log(studentsList);
        return(
                <article>
                <table>
                <thead>
                </thead>
                <tbody>
                    <tr >
                        <th >Student ID</th>
                        <th >Name</th>
                        <th >Units</th>
                        <th >Course</th>
                    </tr>
                    {
                        this.props.studentsList.map(Student =>{
                            return (
                                <tr className="tr">
                        <td >{Student.studentID}</td>
                        <td >{Student.firstName}  {Student.middleName}  {Student.lastName} </td>
                        <td >{Student.units}</td>
                        <td >{Student.course}</td>
                    </tr>
                            )
                    })
                    }
                </tbody>
                </table>
                FirstName: <input type='text'/>
                MiddleName: <input type='text'/>
                LastName: <input type='text'/>
                Total Units: <input type='text'/>
                <select>
                <option>BSIT</option>
                <option>BSCS</option>
                <option>ACT</option>
                </select>
                <button type='button' >Add</button>
                <button>Edit</button>
                <button>Delete</button>
                <button type="button" onClick={this.props.handleAddStudent}>Save</button>
                </article>
                
        );
        
    }
    
}
Body.propTypes = {
    studentsList: PropTypes.array,
    handleChangeInfo: PropTypes.func,
    handleAddStudent: PropTypes.func
}
export default Body;