import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardSearchForm from "./CardSearchForm";

const Wrapper = styled.div`
  display: flex;

  min-height: 400px;
`;
const CardListBox = styled.div`
  display: flex;
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

function CardList() {
  const [cardList, setCardList] = useState({});

  return (
    <Wrapper>
      <CardListBox>
        <h1>This is the Card List Component</h1>
        <CardSearchForm/>
      </CardListBox>
    </Wrapper>
  );
}

export default CardList;
