import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from '../features/GlobalState';



const Searchresult = ({movie}) => {

    const {
        addMovieToWatchlist,
        addMovieToWatched,
        watchlist,
        watched,
      } = useContext(GlobalContext);
    
      let storedMovie = watchlist.find((o) => o.id === movie.id);
      let storedMovieWatched = watched.find((o) => o.id === movie.id);
    
      const watchlistDisabled = storedMovie
        ? true
        : storedMovieWatched
        ? true
        : false;
    
      const watchedDisabled = storedMovieWatched ? true : false;


    return (
        <div className='resultCard'>
            <div className='resultCard_wrapper'>
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className='filler-poster'> </div>
                )}
            </div>

            <div className='info'>
                <div className='info_header'>
                   <h3 className='info_title'>{movie.title}</h3>
                   <h4 className='info_releasedate'>
                   <Moment format="YYYY">{movie.release_date}</Moment>
                    </h4>
                </div>

                <div className="info_controls">
                    <button
                    className="btn"
                    disabled={watchlistDisabled}
                    onClick={() => addMovieToWatchlist(movie)}>
                    Add to Watchlist
                    </button>
                    <button
                    className="btn"
                    disabled={watchedDisabled}
                    onClick={() => addMovieToWatched(movie)}>
                    Add to Watched
                    </button>
                </div>
            </div>

        </div>

        
    );
}

export default Searchresult;