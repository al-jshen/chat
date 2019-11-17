import React from 'react';
import './login.css';
import { Button, FormGroup, FormControl } from "react-bootstrap";

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        Authenticated: false,
    }
    
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

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
                        block onClick={(e) => this.onSubmit(e)}>Chat</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;