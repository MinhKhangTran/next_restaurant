import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
const Hero = ({ title }: { title: string }) => {
  return (
    <HeroWrapper>
      <div className="showcase">
        <Heading>Wilkommen bei Midang</Heading>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  margin: 1rem 0;
  .showcase {
    height: 300px;
    width: 100%;
    background: #000 url("/images/hero 1.png") no-repeat center center;
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
