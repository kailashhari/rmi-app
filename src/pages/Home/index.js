import React from "react";
import PageWrapper from "../../components/PageWrapper";
import { Hero, HeroSection } from "../../components/Hero";
import logo from "../../assets/logoFull.png";
import { styled, Box } from "@mui/material";
import Section from "../../components/Section";
import DoubleSection from "../../components/DoubleSection";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { colors, fontStyles } from "../../constants";
import Reachus from "./Reachus";

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
  fontSize: "2.8rem",
  fontWeight: "700",
  justifyContent: "flex-end",
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
  fontSize: "1.6rem",
});
const ProjectExpansion = styled("div")({
  textAlign: "center",
  color: colors.grey,
  marginBottom: "0.4rem",
  fontSize: "1.2rem",
});

const InterTitle = styled("div")({
  ...fontStyles.heading,
  width: "100%",
  textAlign: "center",
  marginBlock: "4rem",
});

const CarouselWrapper = styled("div")({
  width: "95%",
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

const LeftArrowContainer = styled("div")({
  position: "absolute",
  left: "0",
  height: "100%",
  width: "2.4rem",
  backgroundColor: `${colors.dark}`,
  transition: "all 0.2s ease-in-out",
  opacity: 0.4,
  "&:hover": {
    opacity: 0.8,
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const LeftArrow = styled("div")({
  backgroundColor: colors.light,
  width: "1rem",
  height: "1rem",
  clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
});
const RightArrowContainer = styled("div")({
  position: "absolute",
  right: "0",
  height: "100%",
  width: "2.4rem",
  backgroundColor: `${colors.dark}`,
  transition: "all 0.2s ease-in-out",
  opacity: 0.4,
  "&:hover": {
    opacity: 0.8,
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RightArrow = styled("div")({
  backgroundColor: colors.light,
  width: "1rem",
  height: "1rem",
  clipPath: "polygon(0 0, 100% 50%, 0 100%)",
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
        <Box
          sx={{
            flexDirection: "column",
            flex: "1",
            alignItems: "center",
            justifyContent: "center",
            display: { xs: "none", sm: "none", md: "flex" },
          }}
        >
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
              <HeroText>MACHINE</HeroText>
            </HeroLineContainer>
            <HeroLineContainer>
              <HeroText>INTELLIGENCE</HeroText>
            </HeroLineContainer>
            <HeroLineContainer>
              <HeroText
                sx={{
                  fontFamily: "Gotham",
                  fontSize: "1rem",
                  fontWeight: "400",
                  mt: "1rem",
                }}
              >
                The Official Robotics Club of NIT Trichy
              </HeroText>
            </HeroLineContainer>
          </HeroSection>
        </Box>
      </Hero>
      <Section
        title={"About"}
        sx={{
          height: "70vh",
        }}
      >
        Robotics and Machine Intelligence (RMI) is the official robotics and
        technical research club of NIT Trichy. We are a close-knit community of
        technology enthusiasts from diverse backgrounds who take an interest in
        building things for the greater good of those around us and bringing
        innovation into our everyday lives. Being one of the oldest technical
        clubs of the institute, established in 2005, the melange of projects and
        domains that we, as RMI, delve into has always been ever-expanding.{" "}
        <br />
        <br />
        With the vision to develop solutions that can be implemented in
        real-time, we, as a team, work with domains encompassing designing and
        solid modelling, electronics and embedded systems, control systems,
        computer vision and artificial intelligence, and machine learning. We
        also partake in competitions, exhibitions and symposiums in addition to
        conducting workshops and events to further the spirit of learning and
        growth among all.
      </Section>
      <DoubleSection
        sx={{
          justifyContent: "center",
        }}
        title={"Events and Workshops"}
      />
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
          customLeftArrow={
            <LeftArrowContainer>
              <LeftArrow />
            </LeftArrowContainer>
          }
          customRightArrow={
            <RightArrowContainer>
              <RightArrow />
            </RightArrowContainer>
          }
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
      <Reachus />
    </PageWrapper>
  );
};

export default index;
