/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
//components
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid.js";
import Thumbs from "./Thumb/Thumbs.js";
import { Spinner } from "./Spinner/SpinnerStyles.js";
import SearchBar from "./SearchBar/SearchBar.js";
import Button from "./Buttom/Button.js";

//Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

//Img
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

    if(error) return <div>Something went Wrong! ...</div>
  
  return (
    <>
      {!searchTerm && state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}

      <SearchBar setSearchTerm={setSearchTerm} />

      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {state.results.map(movie => (
          <Thumbs
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}

      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
