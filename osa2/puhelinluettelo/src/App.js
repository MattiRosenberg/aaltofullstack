import { useState, useEffect } from 'react';
import Person from './components/Person';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import personService from './services/person';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '001' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhonenumber, setNewPhonenumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [infoNotification, setInfoNotification] = useState(null);

  const handleNewNameChange = (event) => setNewName(event.target.value);
  const handleNewPhonenumberChange = (event) =>
    setNewPhonenumber(event.target.value);
  const handleFilterChange = (event) => setNewFilter(event.target.value);

  const updateList = () => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  };

  useEffect(updateList, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={infoNotification} />
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
        setPersonAddedInfo={setInfoNotification}
      />
      <h2>Numbers</h2>
      <Person
        persons={persons}
        newFilter={newFilter}
        updateList={updateList}
        setErrorMessage={setInfoNotification}
      />
    </div>
  );
};

export default App;
