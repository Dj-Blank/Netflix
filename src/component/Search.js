import React, { useState } from "react";
import Searchresult from "./SearchResult";


const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);


  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    

    const API_KEY = "0a07aee25c8f9c81243c89db63d258cb";
    
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
            setResults(data.results);
          } else {
            setResults([]);
          }
        });
  };

  return (
  
        <div className="Search">

        
          <div className="Search_input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <Searchresult movie={movie} />
                </li>
              ))}
            </ul>
          )}
          
        </div>

  );
};

export default Search;