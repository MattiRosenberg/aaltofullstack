import { useState } from "react";

const Header = (props) => (
  <div>
    <h1>{props.header}</h1>
  </div>
);
const Title = (props) => (
  <div>
    <p>{props.title}</p>
  </div>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <Static name="Good" value={good} />
        <Static name="Neutral" value={neutral} />
        <Static name="Bad" value={bad} />
        <Static name="Average" value={(good - bad) / (good + neutral + bad)} />
        <Static name="Positive" value={(good / (good + bad)) * 100} />
      </div>
    );
  }
};

const Static = ({ name, value }) => {
  return (
    <div>
      <p>
        {name} {value}
      </p>
    </div>
  );
};

const App = () => {
  const header = "Give feedback";
  const title = "Statics";

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header header={header} />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <Title title={title} />
      <Statics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
