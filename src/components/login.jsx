import React, { Component } from 'react';
import Home from '../components/home.jsx';
import {
    HashRouter,
    NavLink,
    Route 
  } from 'react-router-dom';

  class Login extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <section>
                <nav>
                         <div>
			<label for="username">Username:</label>
			<input type="text" name="username" id="username" placeholder="username"/>
		  </div>

		  <div>
			<label for="password">Password:</label>
			<input type="password" name="password" id="password" placeholder="password" />
		  </div>

		  <div>
          <NavLink to="/home">
            <button>Login</button>
          </NavLink>
          <Route exact path='/home' component={Home} />
		  </div>
          </nav>
          <article>
          </article>
          </section>
         
        </div>
      
          
        </HashRouter>
      );
    }
  }
  
  export default Login;