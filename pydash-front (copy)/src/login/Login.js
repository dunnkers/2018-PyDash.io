import React, { Component } from 'react';

import './Login.css';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class Login extends Component {
    state = {
        name: '',
        pass: ''
    };

   

    handleChange = key => event => {
        this.setState({
            [key]: event.target.value
        });
    };
    onClick = (e) => {
        e.preventDefault()
        this.props.login({
          name: this.refs.name,
          pass: this.refs.pass
         
        })
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
                        ref="name"
                        value={this.state.username}
                        onChange={this.handleChange('username')}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="password"
                        label="Password"
                        ref="pass"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        margin="normal"
                        type="password"
                    />
                    <p>
                        <Button variant="raised" color="primary" onClick={this.onClick}>
                            Login
                        </Button>
                    </p>
                </form>
            </div>
        );
    }
}

export default Login;
