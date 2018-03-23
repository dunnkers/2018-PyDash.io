import React, { Component } from 'react';
import './App.css';
import LoginComponent from './login/Login';
import DashboardComponent from './dashboard/Dashboard';
import { Switch, Route, NavLink } from 'react-router-dom'
import { logout } from './actions/user'
import { connect } from 'react-redux'
import {
  userIsAuthenticatedRedir, userIsNotAuthenticatedRedir,
  userIsAuthenticated, userIsNotAuthenticated
} from './auth'


const getUserName = user => {
  if (user.data) {
    return `Welcome ${user.data.name}`
  }
  return `Not logged in`
}

// Need to apply the hocs here to avoid applying them inside the render method
const Login = userIsNotAuthenticatedRedir(LoginComponent)
const Dashboard = userIsAuthenticatedRedir(DashboardComponent)

// Only show login when the user is not logged in and logout when logged in
// Could have also done this with a single wrapper and `FailureComponent`
const UserName = ({ user }) => (<div>{getUserName(user)}</div>)
// className={styles.username}
const LoginLink = userIsNotAuthenticated(() => <NavLink to="/login">Login</NavLink>) 
// activeClassName={styles.active}
const LogoutLink = userIsAuthenticated(({ logout }) => <a href="#" onClick={() => logout()}>Logout</a>)


class App extends Component {
  state = {
    loggedIn: false
  };

  handleChange = key => event => {
    this.setState({
      [key]: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { logout })(App)
