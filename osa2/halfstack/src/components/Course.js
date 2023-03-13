import Header from './Header';
import Content from './Content';

const Course = ({ courses }) => {
  console.log('Course: ', courses);
  return (
    <div>
      <Header header={'Web development curriculum'} />
      {courses.map((course) => (
        <Content key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Course;
