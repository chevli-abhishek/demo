import React from "react";
import styled from "styled-components";
import DP from "../data/dp.webp";

const Container = styled.section`
  margin-top: 50px;
  padding-bottom: 100px;
`;
const Wrap = styled.div`
  width: 100%;
  padding-top: 100px;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 30px;
`;
const Para = styled.p`
  font-size: 1.2rem;
`;
const Grid = styled.div`
  width: 90%;
  padding: 5%;
  grid-template-columns: auto auto auto;
  display: inline-grid;
  gap: 25px;
`;
const GridItem = styled.div`
  border: none;
  padding: 20px;
  font-size: 30px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 7px 7px 5px 7px #d9dbe0;
  display: flex;
  flex-direction: column;
`;
const GridItemHeading = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

const GridBottom = styled.div`
  display: flex;
  margin-top: auto;
  align-items: center;
  justify-content: space-between;
`;
const GridBText = styled.div``;
const GridItemHeading2 = styled.p`
  font-size: 20px;
`;
const GridItemPara = styled.p`
  font-size: 20px;
`;
const GridDP = styled.img`
  border-radius: 50%;
`;
const Testimonials = () => {
  return (
    <Container id="testimonials">
      <Wrap>
        <Title>Loved by businesses worldwide.</Title>
        <Para>
          Our software is so simple that people can’t help but fall in love with
          it. Simplicity is easy
          <br /> when you just skip tons of mission-critical features.
        </Para>
      </Wrap>
      <Grid>
        <GridItem>
          <GridItemPara>
            TaxPal is so easy to use I can’t help but wonder if it’s really
            doing the things the government expects me to do.
          </GridItemPara>
          <GridBottom>
            <GridBText>
              <GridItemHeading>Sheryl Berge</GridItemHeading>
              <GridItemHeading2>CEO at Lynch LLC</GridItemHeading2>
            </GridBText>
            <GridDP src={DP} />
          </GridBottom>
        </GridItem>
        <GridItem>
          <GridItemPara>
            The best part about TaxPal is every time I pay my employees, my bank
            balance doesn’t go down like it used to. Looking forward to spending
            this extra cash when I figure out why my card is being declined.
          </GridItemPara>
          <GridBottom>
            <GridBText>
              <GridItemHeading>Sheryl Berge</GridItemHeading>
              <GridItemHeading2>CEO at Lynch LLC</GridItemHeading2>
            </GridBText>
            <GridDP src={DP} />
          </GridBottom>
        </GridItem>
        <GridItem>
          <GridItemPara>
            I used to have to remit tax to the EU and with TaxPal I somehow
            don’t have to do that anymore. Nervous to travel there now though.
          </GridItemPara>
          <GridBottom>
            <GridBText>
              <GridItemHeading>Sheryl Berge</GridItemHeading>
              <GridItemHeading2>CEO at Lynch LLC</GridItemHeading2>
            </GridBText>
            <GridDP src={DP} />
          </GridBottom>
        </GridItem>
        <GridItem>
          <GridItemPara>
            ’m trying to get a hold of someone in support, I’m in a lot of
            trouble right now and they are saying it has something to do with my
            books. Please get back to me right away.
          </GridItemPara>
          <GridBottom>
            <GridBText>
              <GridItemHeading>Sheryl Berge</GridItemHeading>
              <GridItemHeading2>CEO at Lynch LLC</GridItemHeading2>
            </GridBText>
            <GridDP src={DP} />
          </GridBottom>
        </GridItem>
        <GridItem>
          <GridItemPara>
            There are so many things I had to do with my old software that I
            just don’t do at all with TaxPal. Suspicious but I can’t say I don’t
            love it.
          </GridItemPara>
          <GridBottom>
            <GridBText>
              <GridItemHeading>Sheryl Berge</GridItemHeading>
              <GridItemHeading2>CEO at Lynch LLC</GridItemHeading2>
            </GridBText>
            <GridDP src={DP} />
          </GridBottom>
        </GridItem>
        <GridItem>
          <GridItemPara>
            This is the fourth email I’ve sent to your support team. I am
            literally being held in jail for tax fraud. Please answer your damn
            emails, this is important.
          </GridItemPara>
          <GridBottom>
            <GridBText>
              <GridItemHeading>Sheryl Berge</GridItemHeading>
              <GridItemHeading2>CEO at Lynch LLC</GridItemHeading2>
            </GridBText>
            <GridDP src={DP} />
          </GridBottom>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Testimonials;
