import React from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer";
import Nav from "./Components/Header/Nav";

import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import MetaTags from "react-meta-tags";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 73px;
 
`;

function App() {
  return (
    <div className="App">
      <MetaTags>
        <title>Stem-The-Tide:MTG</title>
        <meta
          name="description"
          content="A MTG Format to help stem the tide of power creep."
        />
        <meta property="og:title" content="Stem-The-Tide" />
        <meta property="og:image" content="path/to/image.jpg" />
        <meta
          property="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </MetaTags>
      <CssBaseline />
      
      <Wrapper>
        <Header />
        <Router basename='/'>
        <Nav />
          <Body />
        </Router>
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
