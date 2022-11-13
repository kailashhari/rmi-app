import { styled } from "@mui/material";
import React from "react";

const HeroLayout = styled("div")({
  display: "flex",
  width: "80%",
  minHeight: "80vh",
  marginInline: "auto",
  alignItems: "space-evenly",
  justifyContent: "center",
  flexDirection: "row",
  ["@media (max-width:780px)"]: {
    flexDirection: "column",
    width: "100%",
    minHeight: "80vh",
    justifyContent: "space-evenly",
  },
});

const HeroSectionLayout = styled("div")({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  ["@media (max-width:780px)"]: {
    marginTop: "2rem",
    padding: "1.5rem",
  },
});

const Hero = (props) => {
  return <HeroLayout>{props.children}</HeroLayout>;
};

const HeroSection = (props) => {
  return <HeroSectionLayout>{props.children}</HeroSectionLayout>;
};

export { Hero, HeroSection };
export default Hero;
