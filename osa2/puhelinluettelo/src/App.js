import { useState, useEffect } from 'react';
import axios from 'axios';
import Person from './components/Person';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import personService from './services/person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phonenumber: '001' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhonenumber, setNewPhonenumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const handleNewNameChange = (event) => setNewName(event.target.value);
  const handleNewPhonenumberChange = (event) =>
    setNewPhonenumber(event.target.value);
  const handleFilterChange = (event) => setNewFilter(event.target.value);

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newFilter={newFilter}
        handleFilterChange={handleFilterChange}
        persons={persons}
      />
      <h3>Add New</h3>
      <PersonForm
        newName={newName}
        handleNewName={handleNewNameChange}
        handlePhonenumber={handleNewPhonenumberChange}
        newPhonenumber={newPhonenumber}
        persons={persons}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewPhonenumber={setNewPhonenumber}
      />
      <h2>Numbers</h2>
      <Person persons={persons} newFilter={newFilter} />
    </div>
  );
};

export default App;
