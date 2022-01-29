import React from "react";
//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header/Header.js";
import Home from "./components/Home";
import Movie from "./components/Movie.js";
import NotFound from "./components/NotFound.js";
import Login from "./components/Login";
//context
import UserProvider from "./Context.js";

//import global styles
import { GlobalStyle } from "./GlobalStyle.js";

const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
