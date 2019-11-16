import React from 'react';
import './login.css';
import { Button, FormGroup, FormControl } from "react-bootstrap";

class Login extends React.Component {
    state = {
        username: '',
        password: '',

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
                <h1 style={{textAlign: 'center', paddingTop: 50, color: 'white'}}>Du hello</h1>
                <div className="Login">
                    <form>
                        <FormGroup>
                            <FormControl 
                            autoFocus value={this.state.username} 
                            name='username' 
                            onChange={e => this.change(e)}
                            placeholder="Username"></FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl 
                            value={this.state.password} 
                            name='password' 
                            type="password" 
                            onChange={e => this.change(e)}
                            placeholder="Password"></FormControl>
                        </FormGroup>
                        <Button block onClick={(e) => this.onSubmit(e)}>chat pls</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;