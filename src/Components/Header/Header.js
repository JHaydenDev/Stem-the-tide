import React from "react";
import styled from "styled-components";
import LilianaVess from "../../Assets/General artwork/Akroma-AngelofWrath.jpg";

const Wrapper = styled.div`
  display: flex;
  height: 400px;
  background-image: url("${LilianaVess}");
  margin-top: 5.3%;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
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
