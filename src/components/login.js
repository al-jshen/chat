import React from 'react';
import './login.css';
import { Button, FormGroup, FormControl } from "react-bootstrap";
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
        axios.post('http://***REMOVED***:3400/auth', {
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
            <div>
                <h1 style={{textAlign: 'center', paddingTop: 100, color: 'white'}}>Gotta Go Faster</h1>
                <div className="Login" style={{marginTop: '50px'}}>
                    <form>
                        <FormGroup>
                            <FormControl 
                            style={{backgroundColor: '#534848', color: 'white', width: '300px'}}
                            autoFocus value={this.state.username} 
                            name='username' 
                            onChange={e => this.change(e)}
                            placeholder="Username"></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl 
                            style={{backgroundColor: '#534848', color: 'white'}}
                            value={this.state.password} 
                            name='password' 
                            type="password" 
                            onChange={e => this.change(e)}
                            placeholder="Password"></FormControl>
                        </FormGroup>
                        <Button 
                        className="newButton"
                        style={{backgroundColor: '#704000', borderColor: '#ceacac'}} 
                        block onClick={this.onSubmit}>Chat</Button>
                        <h1 style={{textAlign: 'center', paddingTop: 100, color: 'red'}}>{this.state.error}</h1>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
