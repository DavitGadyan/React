import instance from '../axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { baseUrl, baseImageUrl } from '../config';
import './Row.css'

const Row = ({title, fetchUrl}) => {
    const [movies, setMovies] = useState([]);

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
    console.log(movies)

    return (
        <div>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => <img src={`${baseImageUrl}${movie.poster_path}`} className='row__poster' alt={movie.name}/>)}
                
            </div>

        </div>
    )
}

export default Row;
