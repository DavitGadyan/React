import instance from '../axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { baseUrl, baseImageUrl } from '../config';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Row.css'



const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const opts = {
            height: "390",
            width: "100%",
            playerVars: {
                autoplay: 1,
            }};

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl();
        } else {
            movieTrailer(movie?.title || movie?.name || "").then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get("v"));

            }).catch((error) => {console.log(error)})
        }

    };

    useEffect(() => {

        instance.defaults.baseURL = baseUrl

        async function fetchMovies() {
            const response = await instance.get(fetchUrl);
            setMovies(response.data.results);

            return response
        }
        fetchMovies();

    }
        
    , [fetchUrl])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => <img key={movie.id} onClick={() => handleClick(movie)} src={`${baseImageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} className={`row__poster ${isLargeRow ? 'row__posterLarge' : ''}`} alt={movie.name}/>)}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row;
