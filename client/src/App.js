import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom'
import { Navbar, Button, Container } from 'reactstrap'

import Signup from './components/Signup'
import Signin from './components/Signin'
import Jokes from './components/Jokes'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar>
         <NavLink to="/signup" className="link">SignUp</NavLink>
         <NavLink to="/signin" className="link">SignIn</NavLink>
         <NavLink to="/jokes" className="link">Jokes</NavLink>
         <Button onClick={this.logout}>Logout</Button>
       </Navbar>
       <Container>
         <Route path="/signup" component={Signup} />
         <Route path="/signin" component={Signin} />
         <Route path="/jokes" component={Jokes} />
       </Container>
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt')
  
    this.props.history.push('/login')
  }
}

export default withRouter(App);
