const Person= ({ person }) => {
console.log(person)
  return (<li>{person.name}, {person.phonenumber}</li>);
};

export default Person 