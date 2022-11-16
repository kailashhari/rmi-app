import { styled } from "@mui/material";
import React from "react";
import { colors, fontStyles } from "../../constants";
import { ReactComponent as LocationSVG } from "../../assets/reachUsIcons/location.svg";
import { ReactComponent as MailSVG } from "../../assets/reachUsIcons/mail.svg";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Github,
  Youtube,
  LinkTree,
} from "../../assets/followUsIcons/Exporter";

const Section = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "10rem",
  gap: "4rem",
});
const SectionContent = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "4rem",
});
const SectionColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2rem",
  justifyContent: "center",
});
const SectionTitle = styled("div")({
  ...fontStyles.heading,
});

const IconSectionLayout = styled("div")({
  display: "flex",
  flexDirection: "row",
});

const IconSectionContent = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const IconIcon = styled("img")({
  height: "40px",
});

const IconTitle = styled("div")({
  ...fontStyles.heading,
  fontSize: "1.2rem",
  margin: "0.2rem 0.4rem",
});
const IconContent = styled("div")({
  ...fontStyles.content,
  fontSize: "1rem",
  margin: "0.4rem",
});

const IconSection = (props) => {
  return (
    <IconSectionLayout>
      <props.Iconsrc style={{ height: "30px", width: "30px" }} />
      <IconSectionContent>
        <IconTitle>{props.title}</IconTitle>
        <IconContent>{props.children}</IconContent>
      </IconSectionContent>
    </IconSectionLayout>
  );
};

const LinkRow = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  gap: "4rem",
});

const LinkColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const LinkLink = styled("div")({
  ...fontStyles.content,
  color: colors.primary,
  marginBottom: "0.5rem",
});

const LinkLinks = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "0.6rem",
});

const Reachus = () => {
  return (
    <Section>
      <SectionTitle>Reach Us</SectionTitle>
      <SectionContent>
        <iframe
          src="https://www.youtube.com/embed/m_VWOgJYowo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen={true}
          title="video"
          style={{
            width: "30rem",
            aspectRatio: 16 / 9,
          }}
        />
        <SectionColumn>
          <IconSection Iconsrc={LocationSVG} title={"Address"}>
            SAC 04/05 <br />
            NIT Trichy
            <br />
            Tanjore Main Road
            <br /> Tiruchirappalli - 620015
            <br />
            Tamil Nadu
          </IconSection>
        </SectionColumn>
        <SectionColumn>
          <IconSection Iconsrc={MailSVG} title={"Mail"}>
            robotics.nitt@gmail.com
          </IconSection>
          <LinkRow>
            <LinkColumn>
              <LinkLink>RMI-NITT</LinkLink>
              <LinkLinks>
                <a href="https://www.linkedin.com/company/rmi-nitt/">
                  <LinkedIn />
                </a>
                <a href="https://github.com/RMI-NITT">
                  <Github />
                </a>
                <a href="https://www.youtube.com/c/RMIRoboticsandMachineIntelligenceNITT">
                  <Youtube />
                </a>
              </LinkLinks>
            </LinkColumn>
            <LinkColumn>
              <LinkLink>rmi_nitt</LinkLink>
              <LinkLinks>
                <a href="https://www.facebook.com/RmiNitt">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/rmi_nitt/">
                  <Instagram />
                </a>
                <a href="https://linktr.ee/rmi_nitt">
                  <LinkTree />
                </a>
              </LinkLinks>
            </LinkColumn>
          </LinkRow>
        </SectionColumn>
      </SectionContent>
    </Section>
  );
};

export default Reachus;
