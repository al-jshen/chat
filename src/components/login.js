import React from 'react';
import './login.css';
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

    handleSubmit = (e) => {
        e.preventDefault()
        const username = this.state.username;
        const password = this.state.password;
        axios.post(authurl, {
            username: username,
            password: password
        })
        .then((res) => {
            console.log(res.data);
            if (res.data) {
                this.props.history.push('/')
            } else {
                this.setState({
                    error: "FAILED TO AUTHENTICATE"
                })
                .then(() => {
                    console.log(this.state.error)
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
                <h1>Gotta Go Faster</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <label>
                            <input 
                            autoFocus
                            type="text" 
                            placeholder="Username" 
                            name="username" 
                            value={this.state.username} 
                            onChange={this.change}
                            required/>
                        </label>

                        <label>
                            <input 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.change} 
                            required/>
                        </label>

                        <button type="submit">Chat</button>

                        <h2>{this.state.error}</h2>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
