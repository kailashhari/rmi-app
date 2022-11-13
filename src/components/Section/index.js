import { styled } from "@mui/material";
import React from "react";
import { fontStyles } from "../../constants";

const Section = styled("div")({
  maxWidth: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  textAlign: "center",
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
            xl: "32%",
            lg: "36%",
            md: "60%",
            sm: "80%",
            xs: "90%",
          },
        }}
      >
        {props.children}
      </SectionContent>
    </Section>
  );
};

export default index;
