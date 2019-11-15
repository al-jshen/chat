import React from 'react';
import './App.css';

const chara = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!\"#$%\&\'()*+,-./:;<=>?@[\\]^_`{|}~';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Password: 'du hello',
    }
  }
  
  onClickButton = () => {
    var stringer = '';
    for (var i = 0; i < 16; i++) {
      stringer += chara[Math.floor(Math.random() * 92) + 1];
    }
    this.setState({
      Password: stringer,
    });
    document.getElementById('copy').style.visibility = "visible";
  } 

  onCopyButton = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="button" onClick={this.onClickButton}>Gen Password</button>
          <p>{this.state.Password}</p>
          <button className="copy" id="copy" onClick={this.onCopyButton(this.state.Password)}>Copy</button>
        </header>
      </div>
    );
  }

}

export default App;
