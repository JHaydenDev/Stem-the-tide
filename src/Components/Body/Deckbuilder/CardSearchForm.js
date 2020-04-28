import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;

  min-height: 400px;
`;
const CardSearchBox = styled.div`
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

function CardSearchForm() {
  const [cardList, setCardList] = useState({});

  useEffect(async () => {
    const result = await axios("https://api.scryfall.com/cards?page=1-3");
    setCardList(result.data.data);
  }, []);

  return (
    <Wrapper>
      <CardSearchBox>
        <h1>This is the Card Search Component</h1>
        <input type="text" placeholder="Search" />
        <div>
          {console.log(cardList)}

          <div>
            {Object.values(cardList).map(({ id, name }) => (
              <div key={id}>{name}</div>
            ))}
          </div>
        </div>
      </CardSearchBox>
    </Wrapper>
  );
}

export default CardSearchForm;
