import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import { styled } from "@mui/material";
import { colors, fontStyles } from "../../constants";
import { Carousel } from "./Carousel";
import { AppContext } from "../../store/context";
import { Container } from "@mui/material";
import Divider from "../../components/Divider";

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
  const [project, setProject] = useState({
    images: [],
  });
  console.log(projects, pid);
  useEffect(() => {
    setProject(projects.find((p) => p.pid === pid));
    console.log(project.images);
  }, [projects, pid]);
  return (
    <PageWrapper>
      <Hero project={project} />
      <Carousel contents={project.images} />
      <Container
        maxWidth="lg"
        style={{
          textAlign: "justify",
          marginBlock: "6rem",
          fontSize: "1.5rem",
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
    </PageWrapper>
  );
};

export default Index;
