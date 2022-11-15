import { styled } from "@mui/material";
import React from "react";
import PageWrapper from "../../components/PageWrapper";
import Section from "../../components/Section";
import { colors, fontStyles } from "../../constants";
import Divider from "../../components/Divider";
import TimelineSection from "./TimelineSection";
import { ReactComponent as FirstSvg } from "../../assets/honors/first.svg";
import { ReactComponent as SecondSvg } from "../../assets/honors/second.svg";
import { ReactComponent as ThirdSvg } from "../../assets/honors/third.svg";
import { ReactComponent as HonorSvg } from "../../assets/honors/honor.svg";

const TopHonors = styled("div")({
  height: "fit-content",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const TopTitle = styled("div")({
  ...fontStyles.heading,
});

const GridOfFame = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gap: "4rem",
  margin: "3rem",
});

const Prize = ({ n }) => {
  switch (n) {
    case 0:
      return (
        <HonorSvg
          style={{
            width: "4rem",
          }}
        />
      );
    case 1:
      return (
        <FirstSvg
          style={{
            width: "4rem",
          }}
        />
      );
    case 2:
      return (
        <SecondSvg
          style={{
            width: "4rem",
          }}
        />
      );
    case 3:
      return (
        <ThirdSvg
          style={{
            width: "4rem",
          }}
        />
      );
  }
};

const FameItem = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  fontSize: "1.5rem",
  ["@media (max-width:780px)"]: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    textAlign: "center",
  },
});

const FameText = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
const FameTitle = styled("div")({});
const FameDesc = styled("div")({
  fontSize: "1rem",
  color: colors.grey,
});

const index = () => {
  const awards = [
    "MHRD",
    "MHRD",
    "MHRD",
    "MHRD",
    "MHRD",
    "MHRD",
    "MHRD",
    "MHRD",
    "MHRD",
    "MHRD",
  ];

  return (
    <PageWrapper>
      <Section title="Achievements and Accolades">
        We believe our drive and passion for what we do has helped us earn
        several accolades over the years. In each event we participate in, we
        try to give our best and bring laurels to our small community. However,
        we also believe that winning is not what our is all about, and the
        experience and learning are our biggest takeaway in all that we pursue.
      </Section>
      <TopHonors>
        <TopTitle>Top Honors</TopTitle>
        <GridOfFame>
          {awards.map((award, index) => (
            <FameItem key={index}>
              <Prize n={index % 4} />
              <FameText>
                <FameTitle>Winners of Smart India Hackathon</FameTitle>
                <FameDesc>{award}</FameDesc>
              </FameText>
            </FameItem>
          ))}
        </GridOfFame>
      </TopHonors>
      <Divider />
      <TimelineSection />
    </PageWrapper>
  );
};

export default index;
