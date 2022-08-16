import React from "react";
import styled from "styled-components";
import Payroll from "../data/payroll.webp";

const Container = styled.section`
  background-image: linear-gradient(to bottom right, #2563ea, #9586ee, #2563ea);
  margin-top: 50px;
  padding-bottom: 100px;
`;
const Wrap = styled.div`
  width: 100%;
  padding-top: 100px;
  text-align: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 30px;
`;
const Para = styled.p`
  font-size: 1.2rem;
  color: white;
`;
const Box = styled.div`
  display: flex;
  width: 100%;
  padding-top: 100px;
`;
const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.5;
  padding-top: 40px;
  padding-left: 50px;
`;

const InBox = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  padding: 10px;
  color: white;
  text-align: left;
  :active {
    border-style: outset;
  }
  text-decoration: none;
  :hover {
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    background: #3b73ec;
    border: 0.25px solid lightgray;
    border-right: none;
  }
`;
const Item = styled.h3`
  font-size: 1.25rem;
  margin: 5px;
  margin-bottom: 10px;
`;

const Info = styled.p`
  font-size: 15px;
  font-weight: normal;
  margin: 5px;
  margin-bottom: 10px;
`;
const Wrapper2 = styled.div`
  flex: 2;
`;
const Image = styled.img`
  overflow-x: hidden;
  width: 100%;
  border-radius: 15px;
`;

const Features = () => {
  const ClickHandler = (props) => {
    console.log("clicked", props.target.id);
  };
  return (
    <Container id="features">
      <Wrap>
        <Title>Everything you need to run your books.</Title>
        <Para>
          Well everything you need if you aren’t that picky about minor details
          like tax compliance.
        </Para>
      </Wrap>
      <Box>
        <Wrapper1>
          <InBox id="payroll" onClick={ClickHandler}>
            <Item>Payroll</Item>
            <Info>
              Keep track of everyone's salaries and whether or not they've been
              paid. Direct deposit not supported.
            </Info>
          </InBox>

          <InBox id="claimexpenses" onClick={ClickHandler}>
            <Item id="claimexpenses">Claim expenses</Item>
            <Info id="claimexpenses">
              All of your receipts organized into one place, as long as you
              don't mind typing in the data by hand.
            </Info>
          </InBox>

          <InBox id="vathandling" onClick={ClickHandler}>
            <Item id="vathandling">VAT handling</Item>
            <Info id="vathandling">
              We only sell our software to companies who don't deal with VAT at
              all, so technically we do all the VAT stuff they need.
            </Info>
          </InBox>

          <InBox id="reporting" onClick={ClickHandler}>
            <Item id="reporting">Reporting</Item>
            <Info id="reporting">
              Easily export your data into an Excel spreadsheet where you can do
              whatever the hell you want with it.
            </Info>
          </InBox>
        </Wrapper1>

        <Wrapper2>
          <Image src={Payroll} />
        </Wrapper2>
      </Box>
    </Container>
  );
};

export default Features;
