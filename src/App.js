import React from 'react';
import './App.css';
import Pwgen from './components/pwgen';
import Chat from './components/chat/chat';
import Login from './components/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'text': '',
            'list': [],
        }
    }

    handleChange = (e) => {
        this.setState({
            'text': e.target.value
        })
    }

    handleKeyPress = (e) => {
        if (e.key == "Enter") {
            this.handleAdd()
        }
    }

    handleAdd = () => {
        this.setState({
            'list': [...this.state.list, this.state.text],
            'text': ''
        })
    }

  render() {
    return(
      <Router>
        <div>
          <Switch>
            <Route path='/pwgen' component={Pwgen}/>
            <Route path='/' exact render={this.logout} component={Chat}/>
            <Route path='/login' component={Login}/>
          </Switch>
        </div>
        <div>
            <input type="text" value={this.state.text} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>  
            <button onClick={this.handleAdd}>Add whatever to list</button>
        </div>
        {this.state.list.map((item, index) => {
            return(<div key={index}>{item}</div>)
        })}
      </Router>
    );
  }
}

export default App;
