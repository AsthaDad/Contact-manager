import React, {useState , useEffect} from "react";
import './App.css';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import {uuid} from "uuidv4";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";


function App() {
  const LOCAL_STORAGE_key = "contacts";
   const [contacts , setContacts] = useState([]);
  
  const addContactHandler = (contact) =>{
     console.log(contact);
     setContacts([...contacts, {id : uuid() , ...contact}]);
  }

  const removeContactHandler = (id) =>{
    const newContact = contacts.filter((contact) => {
      return contact.id!==id;
    });

    setContacts(newContact);
  }

  useEffect(() =>{
    const str = JSON.parse(localStorage.getItem(LOCAL_STORAGE_key));
    if(str)
    setContacts(str);

  },[]);

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_key, JSON.stringify(contacts));

  },[contacts]);

  return (
    <div className="ui container">
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact render={(props) => (<ContactList {...props} contacts={contacts} getContactId={removeContactHandler}/>)}/>
      <Route path="/add" render={(props) => (<AddContact {...props} addContactHandler={addContactHandler}/>)}/>
      <Route path="/contact/:id" component={ContactDetail}/>
      </Switch>
      {/*<AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>*/}
      </Router>
      
    </div>
  );
}

export default App;
