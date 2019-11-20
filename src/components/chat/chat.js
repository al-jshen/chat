import React from 'react';
import { connect } from 'react-redux';
import './chat.css';
import Popup from './popup';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
    }
  }

  handleLogout = () => {
    this.props.rename('');
    this.props.changelog(false);
    this.props.history.push('/login');
  }

  handlePopup = () => {
    this.setState({
      popup: !this.state.popup,
    });
  }

  render() {
    if (!this.props.islogged) {
      this.props.history.push('/login');
    }
    return(
      <div>
        <div>
          <ul>
            <li className="user"><a onClick={this.handlePopup}>DU HELLO {this.props.user.toUpperCase()}</a></li>
            <li><a onClick={() => this.props.history.push('/pwgen')}>Gen Password</a></li>
            <li><a href='https://github.com/al-jshen/chat' target="_blank">Source Code</a></li>
            <li><a onClick={this.handleLogout}>Log Out</a></li>
          </ul>
        </div>
        {this.state.popup ? <Popup/> : null}
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
      rename: (user) => { dispatch({type: 'USERNAME', payload: user}) },
      changelog: (islogged) => { dispatch({type: 'LOGIN', payload: islogged} )}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);