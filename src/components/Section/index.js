import { styled } from "@mui/material";
import React from "react";
import { fontStyles } from "../../constants";

const Section = styled("div")({
  maxWidth: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minheight: "80vh",
  height: "fit-content",
  textAlign: "center",
  marginTop: "4rem",
  marginBottom: "4rem",
  // paddingTop: '10vh',
  // paddingBottom: "10vh",
});

const SectionTitle = styled("div")({
  ...fontStyles.heading,
  margin: "2.6rem",
});

const SectionContent = styled("div")({
  ...fontStyles.content,
  textAlign: "center",
});

const index = (props) => {
  return (
    <Section>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionContent
        sx={{
          width: {
            xl: "42%",
            lg: "50%",
            md: "60%",
            sm: "80%",
            xs: "90%",
          },
          textAlign: "justify",
        }}
      >
        {props.children}
      </SectionContent>
    </Section>
  );
};

export default index;
