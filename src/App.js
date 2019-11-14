import React from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Nav from "./Components/Header/Nav"

import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MetaTags from "react-meta-tags";


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
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{ backgroundColor: "black", height: "100%" }}
        >
          <Nav/>
          <Header />
          <Body />
          <Footer />
        </Typography>
      </Container>
    </div>
  );
}

export default App;
