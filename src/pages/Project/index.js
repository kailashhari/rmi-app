import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import { styled } from "@mui/material";
import { colors, fontStyles } from "../../constants";
import { Carousel } from "3d-react-carousal";
import { AppContext } from "../../store/context";

const Herolayout = styled("div")({
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
const HeroContent = styled("div")({
  ...fontStyles.content,
  width: "35vw",
  textAlign: "center",
});
const CarouselContainer = styled("div")({
  width: "100%",
  height: "50vh",
  margin: "4rem auto",
  paddingInline: "1rem",
});

const Hero = ({ project }) => {
  return (
    <Herolayout>
      {project.backgroundImage && <HeroBg src={project.backgroundImage} />}
      <HeroTitle>{project.shortName}</HeroTitle>
      <HeroSubtitle>{project.longName}</HeroSubtitle>
      <HeroContent>
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
      </HeroContent>
    </Herolayout>
  );
};

const Index = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  const pid = useParams().projectid;
  const { projects } = React.useContext(AppContext).projects;
  const [project, setProject] = useState({});
  useEffect(() => {
    setProject(projects.find((p) => p.pid === pid));
  }, [projects, pid]);
  return (
    <PageWrapper>
      <Hero project={project} />
      <CarouselContainer>
        <Carousel
          slides={
            project.images
              ? project.images.map((img, index) => (
                  <img src={img} key={index} alt={index} />
                ))
              : []
          }
          autoplay={false}
        />
      </CarouselContainer>
    </PageWrapper>
  );
};

export default Index;
