import React,{ Component } from 'react';
import '../css/body.css';
import PropTypes from 'prop-types';
import {myFunction} from '../util/function.jsx'


export default class Instructor extends Component{
    render(){
        let instructorList = this.props.instructorList;
        let change = this.props.handleChangeProf;
        let add = this.props.handleAddInstructor;
        console.log(instructorList);

        return(
            <div>
            <article>
            <select className='search' id='selected'>
                    <option value="Instructor ID">Instructor ID</option>
                    <option value="Name">Name</option>
            </select>
                    <input type="text" id="myInput"  className='search' onKeyUp={myFunction}/>
                 <table  id="myTable">
                <thead>
                </thead>
                <tbody>
                    <tr >
                        <th >Instructor ID</th>
                        <th >Name</th>
                    </tr>

                    {instructorList.map(prof =>{
                            return (
                                <tr className="tr" >
                        <td>{prof.id}</td>
                        <td>{prof.firstName}  {prof.middleName} {prof.lastName} </td>
                            </tr>
                            )
                    })
                    }

                </tbody>
                </table>
                </article>

                 <div className="article">
                 FirstName: <input type='text' placeholder="Enter FirstName..." name='firstName' onChange={change}/>
                <br></br>
                MiddleName: <input type='text' placeholder="Enter MiddleName..." name='middleName' onChange={change}/>
                <br></br>
                LastName: <input type='text' placeholder="Enter LastName..." name='lastName' onChange={change}/>
                <br></br>
                 <button type="submit" className="buttonsave-cancel" onClick={add} >Save</button>
                 <button type="submit" className="buttonsave-cancel">Cancel</button>
                 </div>
                 </div>
        );
    }
}
Instructor.propTypes = {
    instructorList: PropTypes.array,
    handleChangeProf: PropTypes.func,
    handleAddInstructor: PropTypes.func
}