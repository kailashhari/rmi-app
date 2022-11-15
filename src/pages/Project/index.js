import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import { styled } from "@mui/material";
import { colors, fontStyles } from "../../constants";
import { Carousel } from "3d-react-carousal";

const Herolayout = styled("div")({
  height: "80vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const HeroBg = styled("img")({
  width: "100%",
  objectFit: "cover",
  opacity: 0.2,
  position: "absolute",
  top: "0",
  left: "0",
});

const HeroTitle = styled("div")({
  ...fontStyles.heading,
});
const HeroSubtitle = styled("div")({
  ...fontStyles.content,
  color: colors.grey,
});
const HeroContent = styled("div")({
  ...fontStyles.content,
  width: "35vw",
  textAlign: "center",
});
const CarouselContainer = styled("div")({
  width: "100%",
  height: "50vh",
  margin: "4rem auto",
  paddingInline: "1rem",
});

const Hero = () => {
  return (
    <Herolayout>
      <HeroBg src={"https://picsum.photos/1920/1080"} />
      <HeroTitle>SSC</HeroTitle>
      <HeroSubtitle>Sign to Speech Convertor</HeroSubtitle>
      <HeroContent>
        We believe our drive and passion for what we do has helped us earn
        several accolades over the years. In each event we participate in, we
        try to give our best and bring laurels to our small community. However,
        we also believe that winning is not what our is all about, and the
        experience and learning are our biggest takeaway in all that we pursue.
      </HeroContent>
    </Herolayout>
  );
};

const slides = [
  <img src="https://picsum.photos/800/300/?random" alt="1" key={1} />,
  <img src="https://picsum.photos/800/300/?random" alt="2" key={2} />,
  <img src="https://picsum.photos/800/300/?random" alt="3" key={3} />,
  <img src="https://picsum.photos/800/300/?random" alt="4" key={4} />,
  <img src="https://picsum.photos/800/300/?random" alt="5" key={5} />,
];

const Index = () => {
  const pid = useParams().projectid;
  console.log(pid);
  return (
    <PageWrapper>
      <Hero></Hero>
      <CarouselContainer>
        <Carousel slides={slides} autoplay={false} />
      </CarouselContainer>
    </PageWrapper>
  );
};

export default Index;
