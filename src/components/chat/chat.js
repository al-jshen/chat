import React from 'react';
import { connect } from 'react-redux';
import './chat.css';

class Chat extends React.Component {

  logout = () => {
    this.props.user('');
    this.props.islogged(false);
    this.props.history.push('/login');
  }

  render() {
    return(
      <div>
        <ul>
          <li className="user"><a>MA NAME {this.props.user}</a></li>
          <li><a onClick={() => this.props.history.push('/pwgen')}>Gen Password</a></li>
          <li><a href='https://github.com/al-jshen/chat' target="_blank">Source Code</a></li>
          <li><a onClick={this.logout}>Log Out</a></li>
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
      user: (user) => { dispatch({type: 'USERNAME', payload: user}) },
      islogged: (islogged) => { dispatch({type: 'LOGIN', payload: islogged} )}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);