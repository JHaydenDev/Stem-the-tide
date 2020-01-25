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
  > p {
    margin: 2% auto;
    width: 90%;
  }
`;

function Banned() {
  return (
    <Wrapper>
      <HomeBox>
        <h1>This is the Banned List!</h1>
        <p>
          Lorem Ipsum is the single greatest threat. We are not - we are not
          keeping up with other websites. Lorem Ipsum best not make any more
          threats to your website. It will be met with fire and fury like the
          world has never seen. Does everybody know that pig named Lorem Ipsum?
          An ‘extremely credible source’ has called my office and told me that
          Barack Obama’s placeholder text is a fraud.
        </p>

        <p>
          Lorem Ipsum is the single greatest threat. We are not - we are not
          keeping up with other websites. Lorem Ipsum best not make any more
          threats to your website. It will be met with fire and fury like the
          world has never seen. Does everybody know that pig named Lorem Ipsum?
          An ‘extremely credible source’ has called my office and told me that
          Barack Obama’s placeholder text is a fraud.
        </p>
      </HomeBox>
    </Wrapper>
  );
}

export default Banned;
