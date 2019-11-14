import React from "react";
import styled from "styled-components";
import NB from "../../Assets/General artwork/NB.jpg";

const Wrapper = styled.div`
  display: flex;
  height: 400px;
  background-image: url("${NB}");
  background-position: center;
  background-size: cover;
  margin-top: 5.3%;
`;
const HeaderBox = styled.div`
  background-color: rgba(0, 22, 46, 0.5);
  display: flex;
  flex-direction: column;
  width: 100%;
  > h1 {
    margin: auto;
  }
`;

function Header() {
  return (
    <Wrapper>
      <HeaderBox>
        <h1>This is the Header!</h1>
      </HeaderBox>
    </Wrapper>
  );
}

export default Header;
