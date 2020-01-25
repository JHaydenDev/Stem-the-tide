import React from "react";
import styled from "styled-components";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import NB from "../Assets/General artwork/NB.jpg";

const Wrapper = styled.div`
  display: flex;
  height: auto;
  background-image: url("${NB}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  

  @media screen and (max-width: 500px) {
    div {
        flex-direction: column;
        align-items: center;
    }
`;
const FooterBox = styled.div`
  background-color: rgba(0, 22, 46, 0.5);
  display: flex;
  flex-direction: row;
  min-height:350px;
  width: 100%;
  justify-content: center;
  > section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 45%;
  }
  
`;

const SocialMediaBox = styled.div`
  display: flex;;
  flex-direction: row;
  width:100%;
  justify-content: center;

  > a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items: center;
    color: #3f51b5;
    margin: 0 2%
  }
  > a:hover {   
    transform: scale(1.3);
    transition: all .2s ease-in-out;
  }
}

`;

function Footer() {
  return (
    <Wrapper>
      <FooterBox>
        <section>
          <h2>Email us at:</h2>
          <address>
            <p>Example.com</p>
          </address>
        </section>
        <section>
          <h2>Or reach out to us on:</h2>
          <SocialMediaBox>
            <a href="#">
              {" "}
              <FacebookIcon />
              <div>Facebook</div>
            </a>
            <a href="#">
              {" "}
              <TwitterIcon />
              <div>Twitter</div>
            </a>
          </SocialMediaBox>
        </section>
      </FooterBox>
    </Wrapper>
  );
}

export default Footer;
