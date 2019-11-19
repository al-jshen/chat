import React from 'react';
import { connect } from 'react-redux';
import './chat.css';

class Chat extends React.Component {

  handleLogout = () => {
    this.props.rename('');
    this.props.changelog(false);
    this.props.history.push('/login');
  }

  render() {
    if (!this.props.islogged) {
      this.props.history.push('/login');
    }
    return(
      <div>
        <ul>
          <li className="user"><a>DU HELLO {this.props.user.toUpperCase()}</a></li>
          <li><a onClick={() => this.props.history.push('/pwgen')}>Gen Password</a></li>
          <li><a href='https://github.com/al-jshen/chat' target="_blank">Source Code</a></li>
          <li><a onClick={this.handleLogout}>Log Out</a></li>
        </ul>
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