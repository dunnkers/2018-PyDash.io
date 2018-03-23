import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../actions/user'
import './Login.css';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class Login extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: ''
    };

    handleChange = key => event => {
        this.setState({
            [key]: event.target.value
        });
    };

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">PyDash.io Login</h1>
                </header>

                <form>
                    <br />
                    <TextField
                        id="username"
                        label="Username"
                        value={this.state.username}
                        onChange={this.handleChange('username')}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        margin="normal"
                        type="password"
                    />
                    <p>
                        <Button variant="raised" color="primary">
                            Login
                        </Button>
                    </p>
                </form>
            </div>
        );
    }
}

export default connect(null, { login })(Login)
