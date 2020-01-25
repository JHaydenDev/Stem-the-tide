import React from "react";
import styled from "styled-components";
import Rules from "./Rules";
import Home from "./Home";
import Banned from "./Banned";
import Restricted from "./Restricted";
import CardImg from "./Deckbuilder/CardImg";

import { Route } from "react-router-dom";

const Wrapper = styled.div`
  background-color: rgba(0, 22, 46, 0.5);
  display: flex;
  min-height: 400px;
`;
const BodyBox = styled.div`
  display: flex;
  min-height: 400px;
  flex-direction: column;
  margin: auto;
  width: 90%;
  > h1 {
    margin: auto;
  }
  > p {
    margin: 2% auto;
    width: 90%;
  }
`;

function Body() {
  return (
    <Wrapper>
      <BodyBox>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/rules/" component={Rules} />
          <Route path="/banned/" component={Banned} />
          <Route path="/restricted/" component={Restricted} />
          <Route path="/cardimg/" component={CardImg} />
        </div>
      </BodyBox>
    </Wrapper>
  );
}

export default Body;
