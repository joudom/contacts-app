
import React from 'react';
import './ContactList.css';
import { contacts } from './static-data';

class ContactList extends React.Component {
    render() {
        return (
            <div className='Contacts'>
                <h1>Contact List</h1>
                <div className='ContactList'>
                    <div className='nameColumn'>NAME
                        <div className='nameList'>
                            {contacts.map(contacts => 
                            <ul className='addedContact'>{contacts.name}</ul>)}
                        </div>
                    </div>
                    <div className="cityColumn">CITY
                        <div>
                            {contacts.map(contacts => 
                            <ul className='addedContact'>{contacts.city}</ul>)}
                        </div>
                    </div>
                    <div className="stateColumn">STATE
                        <div>
                            {contacts.map(contacts => 
                            <ul className='addedContact'>{contacts.state}</ul>)}     
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}
export default ContactList;