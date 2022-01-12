import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


//styles
import { Image } from './ThumbsStyles'

const Thumbs = ({image, movieId, clickable}) => {
    return (
        <div>
        {clickable ? (
        <Link to={`/${movieId}`}>
        <Image src={image} alt='movie-title' />
        </Link>

        ) : (

        <Image src={image} alt='movie-title' />
        )}
        </div>
    )
}

Thumbs.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable : PropTypes.bool

}

export default Thumbs
