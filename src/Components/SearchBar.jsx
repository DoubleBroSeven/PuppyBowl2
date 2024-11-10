import { useState } from "react";

const SearchBar = ({ setQuery, setPupDetails, lists, setShowList }) => {
  const [query, setQueryLocal] = useState("");

  const handleChange = (event) => {
    setQueryLocal(event.target.value);
    setQuery(event.target.value);
  };

  const filteredPuppies = lists.filter((pup) =>
    pup.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = (pup) => {
    setShowList(false);
    setPupDetails(pup);
  }

  return (
    <>
      <form>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onSubmit={handleSubmit}
          placeholder="Search for a puppy"

        />
        <button>Submit!</button>
      </form>
      {query && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {filteredPuppies.map((pup) => (
              <li key={pup.id}>
                {pup.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchBar;