import React from 'react';
import './login.css';
import { authurl } from '../url';
import { connect } from 'react-redux';

const axios = require('axios');

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
        }
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
                this.props.history.push('/');
                this.props.user(this.state.username);
                this.props.islogged(true);
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
                error: "Wrong boi"
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

const mapStateToProps = (state) => {
    return {
        user: state.user,
        islogged: state.islogged
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        user: (user) => { dispatch({type: 'USERNAME', payload: user}) },
        islogged: (islogged) => { dispatch({type: 'LOGIN', payload: islogged} )}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
