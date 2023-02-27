import Part from './Part';

const Content = (props) => {
  console.log("Content: ", props);
  
  return (
    <div>
      {props.parts.map((note) => (
        <Part key={note.id} part={note} />
      ))}
    </div>
  );
};

export default Content;
