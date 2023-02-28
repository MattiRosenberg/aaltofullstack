import Part from './Part';
import Total from './Total';
import Title from './Title';

const Content = ({ course }) => {
  console.log('Content: ', course);

  const total = course.parts
    .map((part) => part.exercises)
    .reduce((previous, current) => previous + current, 0);

  return (
    <div>
      <Title title={course.name} />
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total total={total} />
    </div>
  );
};

export default Content;
