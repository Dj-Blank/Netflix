/*import Moment from "react-moment";
import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import requests from "./Requests";
import { GlobalContext } from "../features/GlobalState";


function Modal  ({closeModal})  {

    const {
        addMovieToWatchlist,
        addMovieToWatched,
        watchlist,
        watched,
      } = useContext(GlobalContext);

    const [movie, setMovie] = useState([]);

    

    useEffect(() => {
        async function fetchData() {
           const request = await axios.get(requests.fetchNetflixOriginals);
           console.log("Banner", request.data.results);
           setMovie(
              request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
              ]
           );
        }
        fetchData();
     }, []);

    
    return (
        <div className='modal'>
            <div className='modal_container'>
                <button onClick={() => closeModal(false)}> X </button>
                <div className='modal_title'>
                    <h3 className='info_title'>Name</h3>
                    <h4 className='info_releasedate'>
                    <Moment format="YYYY">{movie.release_date}</Moment>
                    </h4>
                    <div className='modal_body'>
                        <div className='modal_control'>
                            <button onClick={() => addMovieToWatchlist(movie)}>Add to WatchList</button>
                            <button onClick={() => addMovieToWatched(movie)}>Add to Watched</button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;



lign 5 row import Modal from "./Modal.js";

lign 11 row const [openModal, setOpenModal] = useState(false)

lign 66 row {openModal && <Modal closeModal={setOpenModal}/>}

lign 53 row <div className="row_posters" onClick={() => {
                setOpenModal(true);
            }}>
*/
