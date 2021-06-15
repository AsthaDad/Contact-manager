import React from "react";
import {Link} from "react-router-dom";
import user from '../images/user.png';

const ContactDetail = (props) =>{
    const {name , email}= props.location.state.contact;

    return(
        <div className="main" style={{padding:"60px"}}>
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt ="user"/>

                </div>

                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>

            <div className="center-div">
                <Link to="/">
                <button className="ui button blue center">back to contacts</button>
                </Link>
            </div>
        </div>
    );
}

export default ContactDetail;