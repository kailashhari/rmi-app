import React from "react";
import PageWrapper from "../../components/PageWrapper";
import { Hero, HeroSection } from "../../components/Hero";
import logo from "../../assets/logoFull.png";
import { styled } from "@mui/material";

const HeroText = styled("div")({
  fontFamily: "Raleway",
  fontSize: "2.6rem",
  fontWeight: "700",
});

const HeroAnd = styled("span")({
  fontFamily: "Raleway",
  fontSize: "2rem",
  fontWeight: "700",
  margin: "0.2rem 0.4rem",
});

const HeroLineContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
});

const index = () => {
  return (
    <PageWrapper>
      <Hero>
        <HeroSection>
          <img
            src={logo}
            alt="Logo big"
            style={{
              width: "auto",
              height: "24rem",
              margin: "auto",
            }}
          />
        </HeroSection>
        <HeroSection
          sx={{
            flexDirection: "column",
          }}
        >
          <HeroLineContainer>
            <HeroText>ROBOTICS</HeroText>
            <HeroAnd>AND</HeroAnd>
          </HeroLineContainer>
          <HeroLineContainer>
            <HeroText>MACHINE INTELLIGENCE</HeroText>
          </HeroLineContainer>
        </HeroSection>
      </Hero>
    </PageWrapper>
  );
};

export default index;
