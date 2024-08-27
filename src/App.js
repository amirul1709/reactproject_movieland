import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./components/Search.svg";
import MovieCard from "./components/MovieCard";

const API_KEY = "http://www.omdbapi.com/?apikey=34a7f7d9"

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("Spider-Man");
  }, []);
  
  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input placeholder="Search for a movie..." value={search} onChange={(e)=> setSearch(e.target.value)}/>
        <img src={SearchIcon} alt="Search" onClick={()=> searchMovies(search)}/>
      </div>

      {
        movies?.length > 0
          ?(<div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
            </div>
            )
          :(<div className="empty">
            <h2>No movies found</h2>
            </div>
            )
      }
    </div>
  );
}

export default App;