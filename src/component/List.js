import React, { useContext } from "react";
import { GlobalContext } from "../features/GlobalState";
import { MovieCard } from "./MovieCard";

export const List = () => {
    const { watchlist } = useContext(GlobalContext);
  
    return (
      <div className="watchlist">
         <div className="watchlist_container">
                <div className="watchlist_header">
                    <h1 className="watchlist_heading">My Watchlist</h1>
                </div>
                
                
                {watchlist.length > 0 ? (
                <div className="watchlist_grid">
                    {watchlist.map(movie => (
                        <MovieCard movie={movie} type="watchlist"/>
                    ))}
                
                </div>
                ) : (
                    <h2 className="watchlist_no-movies">No movies in your list! Add some!</h2>
                  )}
         </div>
      </div>
    );
  };