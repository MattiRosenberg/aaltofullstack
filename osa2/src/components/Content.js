import Part from './Part';
import Total from './Total';

const Content = (props) => {
  console.log('Content: ', props);

  const total = props.parts
    .map((part) => part.exercises)
    .reduce((previous, current) => previous + current, 0);

  return (
    <div>
      {props.parts.map((note) => (
        <Part key={note.id} part={note} />
      ))}
      <Total total={total} />
    </div>
  );
};

export default Content;
