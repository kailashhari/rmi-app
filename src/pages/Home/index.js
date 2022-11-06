import React from "react";
import PageWrapper from "../../components/PageWrapper";
import { Hero, HeroSection } from "../../components/Hero";
import logo from "../../assets/logoFull.png";
import { styled } from "@mui/material";
import Section from "../../components/Section";
import sectionContents from "../../content/sectionContents.json";
import DoubleSection from "../../components/DoubleSection";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { colors, fontStyles } from "../../constants";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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

const ImgHolder = styled("div")({
  height: "fit-content",
  width: "90%",
  margin: "1rem auto",
  display: "flex",
  backgroundColor: colors.dark,
  boxShadow: `0 0 16px ${colors.primary}BB`,
  borderRadius: "0.6rem",
  alignContent: "center",
  flexDirection: "column",
  overflow: "hidden",
});
const Img = styled("img")({
  objectFit: "cover",
});
const ProjectTitle = styled("div")({
  textAlign: "center",
  color: colors.light,
  marginTop: "0.4rem",
  // marginBottom: "0rem",
  fontSize: "1.4rem",
});
const ProjectExpansion = styled("div")({
  textAlign: "center",
  color: colors.grey,
  marginBottom: "0.4rem",
  fontSize: "1rem",
});

const InterTitle = styled("div")({
  ...fontStyles.heading,
  width: "100%",
  textAlign: "center",
  marginBlock: "4rem",
});

const CarouselWrapper = styled("div")({
  width: "80%",
  marginInline: "auto",
});

const projects = [
  { name: "SPS", expansion: "Smart Parking System" },
  { name: "SPS", expansion: "Smart Parking System" },
  { name: "SPS", expansion: "Smart Parking System" },
  { name: "SPS", expansion: "Smart Parking System" },
  { name: "SPS", expansion: "Smart Parking System" },
  { name: "SPS", expansion: "Smart Parking System" },
  { name: "SPS", expansion: "Smart Parking System" },
];

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
      <InterTitle>Our Projects</InterTitle>
      <CarouselWrapper>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          ssr={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          customTransition="all 0.5s"
          transitionDuration={500}
        >
          {projects.map((project) => (
            <ImgHolder key={project.name}>
              <Img src="https://picsum.photos/350/200" loading="lazy" />
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectExpansion>{project.expansion}</ProjectExpansion>
            </ImgHolder>
          ))}
        </Carousel>
      </CarouselWrapper>
    </PageWrapper>
  );
};

export default index;
