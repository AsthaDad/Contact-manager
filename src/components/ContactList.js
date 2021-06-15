import React from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";
import { Router } from "react-router-dom";

const ContactList = (props) =>{
    console.log(props);

    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    }
    
    const renderContactList = props.contacts.map((contact)=> {
        return(
            <ContactCard contact={contact} clickHander={deleteContactHandler} key={contact.id}></ContactCard>
        );
    })
    return(
        <div className="main" style={{padding:"15px"}}>
            <h2>Contact List</h2>
            <Link to="/add">
                <button className="ui button blue right" >Add</button>
            </Link> 
        <div className="ui celled list" style={{ padding:"10px" ,  boxShadow:"2px 2px lightgray"}}>
            {renderContactList}
        </div>
        </div>
    );
}
export default ContactList;