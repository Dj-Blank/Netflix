import React, { useContext } from "react";
import { GlobalContext } from "../features/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="watchedpage">
      <div className="watched_container">
        <div className="watched_header">
          <h1 className="watched_heading">Watched Movies</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="watchlist_grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="watched_no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};