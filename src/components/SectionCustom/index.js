import { styled } from "@mui/material";
import React from "react";
import { colors, fontStyles } from "../../constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Section = styled("div")({
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
  // paddingTop: '10vh',
  backgroundColor: `${colors.dark}55`,
  backgroundBlendMode: "darken",
  overflow: "hidden",
  position: "relative",
  paddingInline: "10%",
});

const SectionTitle = styled("div")({
  ...fontStyles.heading,
  zIndex: 11,
});

const SectionContent = styled("div")({
  ...fontStyles.content,
  zIndex: 11,
});

const Subsection = styled("div")({
  width: "100%",
  flex: "1",
  padding: "2rem",
  zIndex: 11,
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
    <Section
      id={props.id}
      sx={{
        clipPath: "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)",
        // border: `3px solid ${colors.primary}`,
      }}
    >
      {props.bg !== "" && (
        <img
          src={props.bg}
          alt="event"
          style={{
            position: "absolute",
            zIndex: 10,
            width: "100%",
            aspectRatio: "auto",
            opacity: "0.15",
          }}
        />
      )}
      {/* <Subsection>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionContent>{props.children}</SectionContent>
      </Subsection>
      <Subsection>
        <Carousel />
      </Subsection> */}
      {props.i % 2 === 0 ? (
        <>
          <Subsection>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionContent>{props.children}</SectionContent>
          </Subsection>
          <Subsection>
            <Carousel
              autoPlay={true}
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              style={{
                zIndex: 12,
              }}
            >
              {images.map((image) => (
                <div
                  key={image}
                  style={{ width: "100%", height: "fit-content" }}
                >
                  <img
                    src={image}
                    alt="event"
                    style={{
                      objectFit: "fill",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </Subsection>
        </>
      ) : (
        <>
          <Subsection>
            <Carousel
              autoPlay={true}
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              style={{
                zIndex: 12,
              }}
            >
              {images.map((image) => (
                <div
                  key={image}
                  style={{ width: "100%", height: "fit-content" }}
                >
                  <img
                    src={image}
                    alt="event"
                    style={{
                      objectFit: "fill",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </Subsection>
          <Subsection>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionContent>{props.children}</SectionContent>
          </Subsection>
        </>
      )}
    </Section>
  );
};

export default Index;
