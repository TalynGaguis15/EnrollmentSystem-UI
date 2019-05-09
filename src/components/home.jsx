import React, { Component } from 'react';
import '../css/body.css';
import admin from '../images/admin.png';
import Student from '../components/student.jsx';
import Schedule from '../components/schedule.jsx';
import Instructor from '../components/instructor.jsx';
import ClassList from '../components/classlist.jsx';
import Logo from '../components/logo.jsx'
import {
  HashRouter,
  NavLink,
  Route 
} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <HashRouter>
        <div>
            <section>
                <nav>
                <image className='image' src={admin} alt="Admin"></image>
                         <h5>Welcome Administrator</h5>
          <ul>
            <NavLink to="/">
            <button>Home</button>
            </NavLink>
            <NavLink to="/student">
            <button>Student</button>
            </NavLink>
            <NavLink to="/schedule">
            <button>Schedule</button>
            </NavLink>
            <NavLink to="/instructor">
            <button>Professor</button>
            </NavLink>
            <NavLink to="/classlist">
            <button>Class List</button>
            </NavLink>
          </ul>
          </nav>
          <article>
          <Route exact path='/' component={Logo} />
          <Route path='/student' render={() => <Student studentsList={this.props.studentsList} handleAddStudent={this.props.handleAddStudent}
           handleChangeInfo={this.props.handleChangeInfo}/>} />
          <Route path='/schedule' render={() => <Schedule classList={this.props.classList}  instructorList={this.props.instructorList} 
          handleAddSchedule={this.props.handleAddSchedule} handleChangeSchedule={this.props.handleChangeSchedule} handleChangeProf={this.props.handleChangeProf} />} /> 
          <Route path='/instructor' render={() => <Instructor instructorList={this.props.instructorList} handleAddInstructor={this.props.handleAddInstructor} handleChangeProf={this.props.handleChangeProf}/>} />
          <Route path='/classlist' render={() => <ClassList classList={this.props.classList}/>} />
          </article>
          </section>
         
        </div>
    
        
      </HashRouter>
    );
  }
}

export default Home;

