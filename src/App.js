import React, {useState} from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import {contacts} from './components/static-data';

const App = () => {
  return (
    <div className='App'>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;