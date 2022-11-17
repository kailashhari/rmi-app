import { Box, Container, styled } from "@mui/material";
import React from "react";
import { ReactComponent as TechStackSVG } from "../../assets/projectlinks/techstack.svg";
import { ReactComponent as CalendarSVG } from "../../assets/projectlinks/calendar.svg";
import { ReactComponent as QuickLinksSVG } from "../../assets/projectlinks/quicklinks.svg";
import { ReactComponent as YoutubeSVG } from "../../assets/youtubeHeader.svg";
import { ReactComponent as GithubSVG } from "../../assets/githubHeader.svg";
import { colors, fontStyles } from "../../constants";
import { useState } from "react";

const Column = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  gap: "2rem",
});
const IconColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});
const IconSection = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  width: "fit-content",
});

const IconTitle = styled("div")({
  ...fontStyles.heading,
  fontSize: "1.4rem",
  marginTop: "0.2rem",
});

const TechStacks = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const TechStack = styled("div")({
  ...fontStyles.content,
  color: colors.grey,
  fontSize: "1.3rem",
  fontWeight: 500,
});

const IconWrapperLayout = styled("div")({
  position: "relative",
  width: "fit-content",
  cursor: "pointer",
});
const Tooltip = styled("div")({
  position: "absolute",
  fontSize: "0.8rem",
  backgroundColor: "#9DC7F833",
  padding: "0.3rem",
  borderRadius: "0.3rem",
  width: "max-content",
  left: "-50%",
  bottom: "-60%",
});

const Icons = styled("div")({
  display: "flex",
  flexDirection: "row",
});

const IconWrapper = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <IconWrapperLayout
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <a href={props.link}>{props.children}</a>
      {hover && <Tooltip>{props.tooltip}</Tooltip>}
    </IconWrapperLayout>
  );
};

const ProjectStats = (props) => {
  console.log("Project", props.project);
  return (
    <Container maxWidth="md">
      {props.project.duration && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Column>
            <IconSection>
              <IconColumn>
                <TechStackSVG style={{ width: "3rem" }} />
              </IconColumn>
              <IconColumn>
                <IconTitle>Technology Stack</IconTitle>
                <TechStacks>
                  {props.project.techStack.map((tech) => (
                    <TechStack key={tech}>{tech}</TechStack>
                  ))}
                </TechStacks>
              </IconColumn>
            </IconSection>
          </Column>
          <Column>
            <IconSection>
              <IconColumn>
                <CalendarSVG style={{ width: "3rem" }} />
              </IconColumn>
              <IconColumn>
                <IconTitle>Duration</IconTitle>
                <TechStack>{props.project.duration}</TechStack>
              </IconColumn>
            </IconSection>
            <IconSection>
              <IconColumn>
                <QuickLinksSVG style={{ width: "3rem" }} />
              </IconColumn>
              <IconColumn>
                <IconTitle>Quick Links</IconTitle>
                <Icons>
                  {props.project.quickLinks.youtubeLink !== "" && (
                    <IconWrapper tooltip="Youtube link">
                      <YoutubeSVG
                        style={{
                          height: "2rem",
                        }}
                      />
                    </IconWrapper>
                  )}
                  {props.project.quickLinks.githubLink !== "" && (
                    <IconWrapper tooltip="Github repository">
                      <GithubSVG
                        style={{
                          height: "2rem",
                        }}
                      />
                    </IconWrapper>
                  )}
                </Icons>
              </IconColumn>
            </IconSection>
          </Column>
        </Box>
      )}
    </Container>
  );
};

export default ProjectStats;
