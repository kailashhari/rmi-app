import React from "react";
import PageWrapper from "../../components/PageWrapper";
import { Hero, HeroSection } from "../../components/Hero";
import logo from "../../assets/logoFull.png";
import { styled } from "@mui/material";
import Section from "../../components/Section";
import sectionContents from "../../content/sectionContents.json";
import DoubleSection from "../../components/DoubleSection";

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
          <HeroLineContainer
            sx={{
              marginTop: "0.6rem",
            }}
          >
            <HeroText
              sx={{
                fontFamily: "Gotham",
                fontSize: "1.2rem",
                fontWeight: "400",
              }}
            >
              The Official Robotics Club of NIT Trichy
            </HeroText>
          </HeroLineContainer>
        </HeroSection>
      </Hero>
      <Section
        title={"About"}
        sx={{
          height: "70vh",
        }}
      >
        {sectionContents.ourTeam}
      </Section>
      <DoubleSection title={"Events and Workshops"}>
        {sectionContents.ourTeam}
      </DoubleSection>
    </PageWrapper>
  );
};

export default index;
