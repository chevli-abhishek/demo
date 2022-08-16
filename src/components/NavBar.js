import React from "react";
import styled from "styled-components";
import logo from "../data/logo.svg.png";

const Container = styled.div`
  height: 80px;
  padding: 20px 30px;
  display: flex;
`;
const Left = styled.div`
  padding: 20px 20px;
  cursor: pointer;
  padding-right: 0;
  flex: 0.5;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
const Pal = styled.span`
  color: #2563eb;
`;
const Logo = styled.img`
  width: 25px;
  height: 25px;
  background: #2563eb;
`;
const Name = styled.div`
  padding: 10px;
`;
const Center = styled.div`
  padding: 20px 20px;
  font-size: 1.1rem;
  padding-left: 0;
  flex: 1.5;
  display: flex;
  align-items: center;
`;
const Links = styled.a`
  padding: 5px;
  margin-right: 70px;
  text-decoration: none;
  color: #334155;
  border-radius: 5px;
  :hover {
    background: #f7f9ff;
  }
`;
const Right = styled.div`
  padding: 20px 20px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const SinginButton = styled.button`
  padding: 5px;
  color: #334155;
  background: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-right: 20px;
  :hover {
    background: #f7f9ff;
  }
`;

const Button = styled.button`
  padding: 10px;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 100px;
  font-weight: bold;
  background: #2563eb;
  cursor: pointer;
  :hover {
    background: #5f78a1;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Left>
        <Logo src={logo} />
        <Name>
          Tax<Pal>PAL</Pal>
        </Name>
      </Left>
      <Center>
        <Links href="#features">Features</Links>
        <Links href="#testimonials">Testimonials</Links>
        <Links href="#pricing">Pricing</Links>
      </Center>
      <Right>
        <SinginButton>Sign in!</SinginButton>
        <Button>Get Started Today</Button>
      </Right>
    </Container>
  );
};

export default NavBar;
