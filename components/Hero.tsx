import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
const Hero = ({ title, heading }: { title: string; heading: string }) => {
  if (title === "home") {
    return (
      <HomeWrapper>
        <div className="showcase">
          <Heading>{heading}</Heading>
        </div>
      </HomeWrapper>
    );
  }
  if (title === "menu") {
    return (
      <MenuWrapper>
        <div className="showcase">
          <Heading>{heading}</Heading>
        </div>
      </MenuWrapper>
    );
  }
  if (title === "contact") {
    return (
      <ContactWrapper>
        <div className="showcase">
          <Heading>{heading}</Heading>
        </div>
      </ContactWrapper>
    );
  }
  return (
    <div>
      <h1>iwas lief falsch 🥲</h1>
    </div>
  );
};

const HomeWrapper = styled.div`
  margin: 1rem 0;
  .showcase {
    height: 300px;
    width: 100%;
    background: url("/images/hero-blur-1.png");

    background-size: cover;
    color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .showcase::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .showcase * {
    z-index: 20;
  }
`;
const MenuWrapper = styled.div`
  margin: 1rem 0;
  .showcase {
    height: 300px;
    width: 100%;
    background: url("/images/hero-blur-3.png");

    background-size: cover;
    color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .showcase::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .showcase * {
    z-index: 20;
  }
`;
const ContactWrapper = styled.div`
  margin: 1rem 0;
  .showcase {
    height: 300px;
    width: 100%;
    background: url("/images/hero-blur-2.png");

    background-size: cover;
    color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .showcase::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .showcase * {
    z-index: 20;
  }
`;

export default Hero;
