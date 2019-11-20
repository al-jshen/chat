import React from 'react';
import './popup.css';

class Popup extends React.Component {
    render() {
        return(
            <div className="popup-all">
                <div className="popup-container">
                    <h2 className="profile">Me Profile</h2>
                    <img className="pfp" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="face"></img>
                    <p>"Do you get to the Cloud District very often? Oh what am I saying, of course you don't. "</p>
                </div>
            </div>
        );
    }

}

export default Popup;