import React from "react";
import styled from "styled-components";
import { PlayCircleFilledWhite } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Large = styled.h1`
  margin-top: 150px;
  font-size: 4rem;
  width: 750px;
  text-align: center;
  color: #0f172a;
`;
const Blue = styled.span`
  color: #2563eb;
`;
const ParaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Para = styled.p`
  width: 575px;
  line-height: 35px;
  font-size: 1.25rem;
  text-align: center;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;
const Button = styled.button`
  border: none;
  border-radius: 25px;
  padding: 10px;
  margin: 15px;
  background: #0f172a;
  color: white;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background: #282d3d;
  }
`;
const Button2 = styled.button`
  border: 1px solid;
  border-color: #3e69f7;
  border-radius: 25px;
  padding: 12px;
  margin: 15px;
  background: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    border-color: #062691;
    background: #3e69f7;
  }
`;
const Para2 = styled.p`
  width: 575px;
  line-height: 35px;
  font-size: 1.25rem;
  text-align: center;
  margin-top: 100px;
`;
const TrustWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 200px;
  margin-top: 30px;
`;
const Trusted = styled.h1`
  font-weight: bold;
  text-align: center;
  color: #334155;
`;

const Des = () => {
  return (
    <>
      <Container>
        <Large>
          Accounting <Blue>made simple</Blue> for small businesses.
        </Large>
      </Container>
      <ParaWrapper>
        <Para>
          Most bookkeeping software is accurate, but hard to use. We make the
          opposite trade-off, and hope you don’t get audited.
        </Para>
      </ParaWrapper>
      <ButtonWrap>
        <Button>Get 6 months free</Button>
        <Button2>
          <PlayCircleFilledWhite />
          Watch Video
        </Button2>
      </ButtonWrap>
      <ParaWrapper>
        <Para2>
          <b>Trusted by these six companies so far</b>
        </Para2>
      </ParaWrapper>
      <TrustWrapper>
        <Trusted>
          <PlayCircleFilledWhite />
          Pranav
        </Trusted>
        <Trusted>
          <PlayCircleFilledWhite />
          Pratik
        </Trusted>
        <Trusted>
          <PlayCircleFilledWhite />
          Hokkai
        </Trusted>
        <Trusted>
          <PlayCircleFilledWhite />
          Sid
        </Trusted>
        <Trusted>
          <PlayCircleFilledWhite />
          Fenil
        </Trusted>
        <Trusted>
          <PlayCircleFilledWhite />
          Abhishek
        </Trusted>
      </TrustWrapper>
    </>
  );
};

export default Des;
