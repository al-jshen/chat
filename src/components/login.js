import React from 'react';
import './login.css';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { authurl } from '../url';
const axios = require('axios');


class Login extends React.Component {
    state = {
        username: '',
        password: '',
        error: '',
    }
    
    change = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = () => {
        const username = this.state.username;
        const password = this.state.password;
        axios.post(authurl, {
            username: username,
            password: password
        })
        .then((res) => {
            if (res.data) {
                this.props.history.push('/')
            } else {
                this.setState({
                    error: "FAILED TO AUTHENTICATE"
                })
            }
        })
        .catch((err) => {
            this.setState({
                error: "ERROR"
            })
        })
    }

    render() {
        return(
            <div className="form">
                <h1>Walk Faster</h1>
                <form method="post">
                    <div class="container">
                        <label>
                            <input 
                            autoFocus
                            type="text" 
                            placeholder="Username" 
                            name="username" 
                            value={this.state.username} 
                            onChange={e => this.change(e)}
                            required></input>
                        </label>

                        <label>
                            <input 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={this.state.password}
                            onChange={e => this.change(e)} 
                            required></input>
                        </label>

                        <button onClick={this.onSubmit} blocks>Chat</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
