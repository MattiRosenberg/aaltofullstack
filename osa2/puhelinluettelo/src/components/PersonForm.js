import personServices from '../services/person';

const PersonForm = (props) => {
  const addName = (event) => {
    const newPerson = {
      name: props.newName,
      phonenumber: props.newPhonenumber,
    };

    event.preventDefault();
    if (props.persons.map((person) => person.name).includes(props.newName)) {
      alert(`${props.newName} is already added to phonebook`);
    } else {
      personServices.create(newPerson).then((returnedPerson) => {
        props.setPersons(props.persons.concat(returnedPerson));
        props.setNewName('');
        props.setNewPhonenumber('');
      });
    }
  };

  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={props.newName} onChange={props.handleNewName} />
      </div>
      <div>
        {' '}
        phonenumber:{' '}
        <input
          value={props.newPhonenumber}
          onChange={props.handlePhonenumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
