import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-height: 400px;
`;
const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
  > h1 {
    margin: auto;
  }
  > div {
    margin: 2% auto;
    width: 90%;
  }
`;

function CardImg() {
  return (
    <Wrapper>
      <HomeBox>
        <h1>This is the Card Search!</h1>
        <div>
       
        </div>

      
      </HomeBox>
    </Wrapper>
  );
}

export default CardImg;
