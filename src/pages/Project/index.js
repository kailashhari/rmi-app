import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import { Avatar, Grid, styled } from "@mui/material";
import { colors, fontStyles } from "../../constants";
import { Carousel } from "./Carousel";
import { AppContext } from "../../store/context";
import { Container } from "@mui/material";
import Divider from "../../components/Divider";
import ProjectStats from "./ProjectStats";

const Herolayout = styled("div")({
  height: "80vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const Layout = styled("div")({
  width: "100%",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const HeroBg = styled("img")({
  width: "100%",
  objectFit: "cover",
  opacity: 0.2,
  position: "absolute",
  top: "0",
  left: "0",
});

const HeroTitle = styled("div")({
  ...fontStyles.heading,
});
const HeroSubtitle = styled("div")({
  ...fontStyles.content,
  color: colors.grey,
});

const PubTitle = styled("div")({
  ...fontStyles.heading,
  fontSize: "1.5rem",
  color: colors.black,
  lineHeight: "100%",
  fontWeight: 700,
});

const PubSubtitle = styled("div")({
  ...fontStyles.content,
  color: colors.grey,
  fontSize: "1.3rem",
  fontWeight: 400,
});

const Publication = styled("div")({
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginBlock: "1rem",
  display: "flex",
  flexDirection: "column",
});

const HeroContent = styled("div")({
  ...fontStyles.content,
  width: "35vw",
  textAlign: "center",
  marginTop: "1.5rem",
});

const Title = styled("div")({
  ...fontStyles.heading,
  fontSize: "2rem",
});

const DevTitle = styled("div")({
  ...fontStyles.heading,
  fontSize: "1.2rem",
  color: colors.black,
  lineHeight: "100%",
  fontWeight: 600,
  marginBlock: "1rem",
});

const Hero = ({ project }) => {
  return (
    <Herolayout>
      {project.backgroundImage && <HeroBg src={project.backgroundImage} />}
      <HeroTitle>{project.shortName}</HeroTitle>
      <HeroSubtitle>{project.longName}</HeroSubtitle>
      <HeroContent>{project.shortDesc}</HeroContent>
    </Herolayout>
  );
};

const Index = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  const pid = useParams().projectid;
  const { projects } = React.useContext(AppContext).projects;
  const { currentMembers, alumni } = React.useContext(AppContext).ourTeam;

  const [project, setProject] = useState({
    images: [],
  });
  const [projectMembers, setProjectMembers] = useState([]);

  useEffect(() => {
    const proj = projects.find((p) => p.pid === pid);
    setProject(proj);
    const mapData = {};
    // console.log(proj);
    [...currentMembers, ...alumni].forEach((member) => {
      mapData[member.id] = member;
    });
    setProjectMembers([]);
    proj.developers.forEach((dev) => {
      setProjectMembers((prev) => [...prev, mapData[dev.id]]);
    });
    // console.log(projectMembers);
  }, [pid, projects, currentMembers, alumni]);
  return (
    <PageWrapper>
      <Hero project={project} />
      <Carousel contents={project.images} />
      <Container
        maxWidth="lg"
        style={{
          textAlign: "justify",
          marginBlock: "6rem",
          fontSize: "1.2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {project.longDesc &&
          project.longDesc.map((desc, index) => (
            <>
              {desc.heading && <h4>{desc.heading}</h4>}
              {desc.type === "para" && <p>{desc.para}</p>}
              {desc.type === "bullets" && (
                <ul>
                  {desc.para.map((bullet, ind) => (
                    <li key={ind}>{bullet}</li>
                  ))}
                </ul>
              )}
            </>
          ))}
      </Container>
      <ProjectStats project={project} />
      <Divider />
      {project.publications && (
        <Layout>
          <Title
            sx={{
              marginBlock: "2rem",
            }}
          >
            Publications and Honours{" "}
          </Title>
          {project.publications.map((pub, index) => (
            <Publication key={index}>
              <PubTitle>{pub.title}</PubTitle>
              <PubSubtitle>{pub.subtitle}</PubSubtitle>
            </Publication>
          ))}
        </Layout>
      )}
      {projectMembers && (
        <Layout>
          <Title
            sx={{
              marginBlock: "2rem",
            }}
          >
            Project Developers{" "}
          </Title>
          <Container maxWidth="md" sx={{ marginTop: "1rem" }}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              width="fit-content"
              spacing={0}
            >
              {projectMembers.map((dev, index) => (
                <Grid
                  item
                  key={index}
                  xs={6}
                  sm={4}
                  md={3}
                  lg={3}
                  align="center"
                  width="fit-content"
                  padding={0}
                >
                  <Publication key={index}>
                    <Avatar
                      src={dev.imageLink}
                      style={{
                        width: "8rem",
                        height: "8rem",
                      }}
                    />
                    <DevTitle>{dev.name}</DevTitle>
                  </Publication>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Layout>
      )}
    </PageWrapper>
  );
};

export default Index;
