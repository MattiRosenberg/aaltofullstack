import { useState } from 'react';
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phonenumber: '001' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhonenumber, setNewPhonenumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const addName = (event) => {
    const newPerson = {
      name: newName,
      phonenumber: newPhonenumber,
    };

    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewPhonenumber('');
    }
  };

  const handleNewNameChange = (event) => setNewName(event.target.value);
  const handleNewPhonenumberChange = (event) =>
    setNewPhonenumber(event.target.value);
  const handleFilterChange = (event) => setNewFilter(event.target.value);

  const filtered = persons.filter((person) => person.name.includes(newFilter));

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          filter: <input value={newFilter} onChange={handleFilterChange} />
        </div>
        <div>
          <h3>Add New</h3>
        </div>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          phonenumber:{' '}
          <input value={newPhonenumber} onChange={handleNewPhonenumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filtered.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default App;
