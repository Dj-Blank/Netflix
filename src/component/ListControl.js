import React, { useContext } from "react";
import { GlobalContext } from '../features/GlobalState';

const Listcontrol = ({movie, type}) => {
    const {
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeFromWatched,
      } = useContext(GlobalContext);

    return (
        <div className='cardcontrol'>
            {type == 'watchlist' && (
                <>
                    <button className='cardcontrol_button'
                    onClick={() => addMovieToWatched(movie)}>
                        watched

                    </button>

                    <button className='cardcontrol_button'
                    onClick={() => removeMovieFromWatchlist(movie.id)}>
                        remove

                    </button>
                </>
            )}

            {type === "watched" && (
                    <>
                    <button className="cardcontrol_button" onClick={() => moveToWatchlist(movie)}>
                        Move to watchlist
                    </button>

                    <button
                        className="cardcontrol_button"
                        onClick={() => removeFromWatched(movie.id)}
                    >
                        remove
                    </button>
                    </>
                )}
        </div>
    );
}

export default Listcontrol;
