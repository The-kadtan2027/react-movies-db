/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

//API
import API from '../API'

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
//components



//Hooks


//Img
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const fetchMovies = async (page, searchTerm ='') => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            
            setState(prev =>({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
            
        } catch(error) {
            setError(true);

        }
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies(1)
        
    }, [])

    console.log(state);

    return <div>
        Home page
    </div>
}


export default Home;