const Filter = ({ newFilter, handleFilterChange, persons, setNewFiltered}) => {
  return ( 
    <form>
      filter: <input value={newFilter} onChange={handleFilterChange} />
    </form>
  );
};

export default Filter;
