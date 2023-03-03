import './App.css';
import { useState, useEffect } from 'react';
import countriesService from './services/countries';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState(null);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    console.log('handleSearch: ', event.target.value);
    setSearch(event.target.value);
  };

  const getAllCountries = () => {
    countriesService.getAll().then((response) => {
      setCountries(response);
    });
  };

  useEffect(getAllCountries, []);

  const showMatchingCountries = () => {
    console.log('search: ', search);
    if ((countries !== null, search.length > 2)) {
      const names = countries.map((country) => country.name.common);
      console.log('Names: ', names);

      const results = names.filter((country) => {
        return country.includes(search);
      });

      console.log('results: ', results);
      return results.map((result) => <ul>{result}</ul>)
    } else if (countries === null) {
      return <p>Wait</p>;
    } else {
      return <p>Too many results</p>;
    }
  };

  return (
    <div>
      <form>
        <input value={search} onChange={handleSearch} />
      </form>
      <p>{countries !== null ? 'Ready' : 'Wait'}</p>
      {showMatchingCountries()}
    </div>
  );
}

export default App;
