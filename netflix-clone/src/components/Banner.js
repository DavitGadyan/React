import React from "react";
import { useState, useEffect } from "react";
import instance from "../axios";
import { baseUrl, baseImageUrl } from '../config';
import './Banner.css'

const Banner = ({fetchUrl}) => {
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n -1) + "..." : str;
    };

    const [movie, setMovie] = useState([]);

    useEffect(() => {

    async function fetchData() {
        instance.defaults.baseURL = baseUrl

        const response = await instance.get(fetchUrl);
        setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)-1]);
        return response

    }
    fetchData();

    
    }, [fetchUrl]);
    console.log(movie)

    return (
        <header
        className="banner"
        style = {{
            backgroundSize: 'cover',
            backgroundImage: `url(${baseImageUrl}${movie?.backdrop_path})`,
            backgroundPosition: 'center center'

        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My list</button>
                </div>
                <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner--fadeButton"></div>
        </header>
    )
};

export default Banner;
