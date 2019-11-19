import React from 'react';
import { connect } from 'react-redux';
import './chat.css';

class Chat extends React.Component {
  render() {
    return(
      <div>
        <ul>
          <li className="user"><a>MA NAME {this.props.user.toUpperCase()}</a></li>
          <li><a onClick={() => this.props.history.push('/pwgen')}>Gen Password</a></li>
          <li><a href='https://github.com/al-jshen/chat' target="_blank">Source Code</a></li>
          <li><a>Log Out</a></li>
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

export default connect(mapStateToProps)(Chat);