import personService from '../services/person';

const Person = ({ persons, newFilter, updateList, setErrorMessage }) => {
  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      return personService
        .remove(person.id)
        .then((returnValue) => {
          console.log('updatelist');
          updateList();
        })
        .catch((reason) => {
          console.log('catch');
          setErrorMessage(reason);
          updateList()
        });
    }
  };

  const filtered = persons.filter((person) => person.name.includes(newFilter));
  return filtered.map((person) => (
    <div key={person.name}>
      {person.name} {person.number}
      <button onClick={() => handleDelete(person)}>delete</button>
    </div>
  ));
};

export default Person;
