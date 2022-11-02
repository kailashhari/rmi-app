import React from "react";
import { styled } from "@mui/material";
import { colors } from "../../constants";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Github,
  Youtube,
  LinkTree,
} from "../../assets/followUsIcons/Exporter";
import logo from "../../assets/logoCompressed.png";
import FooterRightHolder from "./FooterRight";

const Footer = styled("div")({
  marginTop: "4rem",
  width: "100vw",
  backgroundColor: colors.purple,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.2rem",
});

const Credits = styled("div")({
  color: "#fff",
  fontSize: "1.2rem",
  fontFamily: "Poppins",
});

const CreditLink = styled("span")({
  margin: "0.5rem",
  color: colors.primary,
});

const FooterSeparator = styled("div")({
  width: "100%",
  height: "2px",
  backgroundColor: "#fff",
});

const FooterMain = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const FooterLeft = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const FooterLogo = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignItems: "center",
});

const FooterText = styled("div")({
  color: "#fff",
  fontFamily: "Raleway",
  fontWeight: "700",
});

const FollowUsSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

const FollowUs = styled("div")({
  fontSize: "1.2rem",
  color: colors.primary,
  fontFamily: "Poppins",
});

const FollowUsLinks = styled("div")({
  display: "flex",
  flexDirection: "row",
});

const FollowUsLink = styled("a")({
  width: {
    xs: "0.75rem",
    sm: "0.75rem",
    md: "1.6rem",
    lg: "1.6rem",
  },
});

const FooterHolder = () => (
  <Footer
    sx={{
      padding: {
        xs: "5% 5%",
        sm: "5% 5%",
        md: "5% 5%",
        lg: "3% 15%",
      },
    }}
  >
    <FooterMain
      sx={{
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "row",
        },
      }}
    >
      <FooterLeft>
        <FooterLogo>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "56px",
              height: "56px",
            }}
          />
          <FooterText
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "1.2rem",
              },
            }}
          >
            Robotics and
            <br />
            Machine Intelligence
          </FooterText>
        </FooterLogo>
        <FollowUsSection>
          <FollowUs
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "1.2rem",
              },
            }}
          >
            Follow Us
          </FollowUs>
          <FollowUsLinks
            sx={{
              gap: {
                xs: "0.3rem",
                sm: "0.3rem",
                md: "0.6rem",
                lg: "0.6rem",
              },
            }}
          >
            <FollowUsLink href="https://www.facebook.com">
              <Facebook />
            </FollowUsLink>
            <FollowUsLink href="https://www.facebook.com">
              <Instagram />
            </FollowUsLink>
            <FollowUsLink href="https://www.facebook.com">
              <LinkedIn />
            </FollowUsLink>
            <FollowUsLink href="https://www.facebook.com">
              <Github />
            </FollowUsLink>
            <FollowUsLink href="https://www.facebook.com">
              <Youtube />
            </FollowUsLink>
            <FollowUsLink href="https://www.facebook.com">
              <LinkTree />
            </FollowUsLink>
          </FollowUsLinks>
        </FollowUsSection>
      </FooterLeft>
      <FooterRightHolder />
    </FooterMain>
    <FooterSeparator />
    <Credits>
      Site Designed, Developed and Maintained by
      <CreditLink>RMI Web Team</CreditLink>
    </Credits>
  </Footer>
);

export default FooterHolder;
