import personService from '../services/person';

const Person = ({ persons, newFilter }) => {
  const handleDelete = (person) => {
    console.log('handleDelete');

    if (window.confirm(`Delete ${person.name}?`)) {
      return personService.remove(person.id)
    }
  };

  const filtered = persons.filter((person) => person.name.includes(newFilter));
  return filtered.map((person) => (
    <div key={person.name}>
      {person.name} {person.number}{' '}
      <button onClick={ () => handleDelete(person)} >delete</button>
    </div>
  ));
};

export default Person;