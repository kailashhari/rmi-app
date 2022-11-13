import { styled } from "@mui/material";
import React, { useState } from "react";
import { colors, fontStyles } from "../../constants";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Section = styled("div")({
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
  // paddingTop: '10vh',
  overflow: "hidden",
  position: "relative",
  paddingInline: "10%",
  ["@media (max-width:780px)"]: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
  },
});

const SectionTitle = styled("div")({
  ...fontStyles.heading,
  marginBottom: "1rem",
  textAlign: "center",
});

const SectionContent = styled("div")({
  ...fontStyles.content,
  textAlign: "center",
});

const Subsection = styled("div")({
  width: "100%",
  flex: "1",
  padding: "2rem",
});

const ImgGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gap: "0.8rem",
});

const ImgCardHolder = styled("div")({
  width: "100%",
  aspectRatio: 16 / 9,
  backgroundColor: colors.primary,
  position: "relative",
  transition: "all 0.2s ease-out",
  cursor: "pointer",
});

const Img = styled("img")({
  width: "100%",
  height: "100%",
});

const ImgDesc = styled("div")({
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: `${colors.dark}CC`,
  textAlign: "center",
  padding: "auto",
  top: "0",
  color: colors.light,
  border: `2px solid ${colors.primary}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.6rem",
  fontWeight: 700,
});

const ImageBg = styled("div")({
  width: "100%",
  position: "absolute",
  top: 0,
  border: `2px solid ${colors.primary}`,
  height: "100%",
});

const images = [
  "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/01/31/954124-rajinikanth-aishwarya-rai-bachchan.jpg",
  "https://images.indianexpress.com/2021/04/Anniyan.jpg",
  "https://images.indianexpress.com/2022/08/kamal-haasan-indian-2.jpg",
  "https://i.ytimg.com/vi/UMr1EI11Wjs/maxresdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8fPh6h4X8lOLWrmFoIdwOMm7GmPrCny4eg&usqp=CAU",
  "https://s1.dmcdn.net/v/Bw7Fe1MB5nzUhpBs7/x1080",
];

const ImgCard = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <ImgCardHolder
      sx={{
        transform: hovered ? "scale(1.1)" : "scale(1)",
        zIndex: hovered ? 100 : "inherit",
        overflow: hovered ? "visible" : "hidden",
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <Img src={props.image} />
      {hovered && <ImgDesc>Pragyan Exhibition</ImgDesc>}
      {hovered && <ImageBg />}
    </ImgCardHolder>
  );
};

const Index = (props) => {
  return (
    <Section>
      {/* <Subsection>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionContent>{props.children}</SectionContent>
      </Subsection>
      <Subsection>
        <Carousel />
      </Subsection> */}
      <Subsection>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionContent>{props.children}</SectionContent>
      </Subsection>
      <Subsection>
        <ImgGrid>
          {images.map((image, i) => (
            <Link key={image} to={`/events/#event${i}`}>
              <ImgCard image={image}></ImgCard>
            </Link>
          ))}
        </ImgGrid>
      </Subsection>
    </Section>
  );
};

export default Index;
