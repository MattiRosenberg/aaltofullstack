const Person = ({ persons, newFilter }) => {
  const filtered = persons.filter((person) => person.name.includes(newFilter));
  return filtered.map((person) => (
    <li key={person.name}>
      {person.name} {person.phonenumber}
    </li>
  ));
};

export default Person;
