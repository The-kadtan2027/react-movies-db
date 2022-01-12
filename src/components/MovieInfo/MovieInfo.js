import React from "react";
import PropTypes from "prop-types";

//Components
import Thumbs from "../Thumb/Thumbs";

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

//No Image
import NoImage from "../../images/no_image.jpg";

//styles
import { Wrapper, Content, Text } from "./MovieInfoStyles";

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumbs
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
      />
      <Text>
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>

        <div className="rating-directors">
          <div>
            <h3>RATING</h3>
            <div className="score">{movie.vote_average}</div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map(director => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

MovieInfo.propTypes = {
    movie: PropTypes.object
}

export default MovieInfo;
