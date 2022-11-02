import { styled } from "@mui/material";
import React from "react";
import { colors, fontStyles } from "../../constants";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
});

const SectionTitle = styled("div")({
  ...fontStyles.heading,
});

const SectionContent = styled("div")({
  ...fontStyles.content,
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

const ImgCard = styled("div")({
  width: "100%",
  aspectRatio: 16 / 9,
  backgroundColor: colors.primary,
  overflow: "hidden",
  position: "relative",
});

const Img = styled("img")({
  width: "100%",
});

const ImgDesc = styled("div")({
  color: colors.dark,
  fontSize: "0.8rem",
});

const Content = styled("div")({
  // position: "absolute",
  // top: 0,
  widht: "100%",
  height: "fit-content",
});

const images = [
  "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/01/31/954124-rajinikanth-aishwarya-rai-bachchan.jpg",
  "https://images.indianexpress.com/2021/04/Anniyan.jpg",
  "https://images.indianexpress.com/2022/08/kamal-haasan-indian-2.jpg",
  "https://i.ytimg.com/vi/UMr1EI11Wjs/maxresdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8fPh6h4X8lOLWrmFoIdwOMm7GmPrCny4eg&usqp=CAU",
  "https://s1.dmcdn.net/v/Bw7Fe1MB5nzUhpBs7/x1080",
];

const Index = (props) => {
  console.log(props);
  return (
    <Section>
      {/* <Subsection>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionContent>{props.children}</SectionContent>
      </Subsection>
      <Subsection>
        <Carousel />
      </Subsection> */}

      <>
        <Subsection>
          <SectionTitle>{props.title}</SectionTitle>
          <SectionContent>{props.children}</SectionContent>
        </Subsection>
        <Subsection>
          <ImgGrid>
            {images.map((image) => (
              <ImgCard key={image}>
                <Content>
                  <Img src={image} />
                  <ImgDesc>{image}</ImgDesc>
                </Content>
              </ImgCard>
            ))}
          </ImgGrid>
        </Subsection>
      </>
    </Section>
  );
};

export default Index;
