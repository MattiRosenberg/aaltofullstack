import person from '../services/person';
import personServices from '../services/person';

const PersonForm = (props) => {
  const addName = (event) => {
    event.preventDefault();

    const newPerson = {
      name: props.newName,
      number: props.newPhonenumber,
    };

    const oldPerson = props.persons
      .find((person) => newPerson.name === person.name)

    if (oldPerson !== undefined) {
      console.log('hello', oldPerson);
      if (
        window.confirm(`${oldPerson.newName} is already added to phonebook 
          replace with new one`)
      ) {
        personServices.replace(oldPerson).then((response) => {
          console.log(response);
        });
      }
    } else {
      personServices.create(newPerson).then((returnedPerson) => {
        props.setPersons(props.persons.concat(returnedPerson));
        props.setNewName('');
        props.setNewPhonenumber('');
        props.setPersonAddedInfo('New person added')

        setTimeout(() => {
          props.setPersonAddedInfo('')
        }, 2000);
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
