import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import './styles.css'
function Contacs() {
    const [contacts, setContacts] = useState([
        {fullName: 'Ahmet', phoneNumber: '123456789'},
        {fullName: 'Mehmet', phoneNumber: '123456789'},
    ]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts])


  return (
    <div id='container'>
        <h1>Contacts</h1>
      <List allContacts = {contacts}/>
     <Form addContact = {setContacts} allContacts = {contacts}/> 
    </div>
  )
}

export default Contacs
