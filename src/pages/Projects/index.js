import React, { useEffect } from "react";
import Selector from "../../components/Selector";
import { styled } from "@mui/system";
import ProjectCard from "./ProjectCard";
import PageWrapper from "../../components/PageWrapper";
import Section from "../../components/Section";
import { AppContext } from "../../store/context";

const ProjectCards = styled("div")({
  width: "fit-content",
  display: "grid",
  gridGap: "3rem",
  margin: "3rem auto",
});

const ProjectsPageHolder = ({ title }) => {
  const { projects } = React.useContext(AppContext).projects;
  useEffect(() => {
    document.title = title;
  }, [title]);
  const [val, setVal] = React.useState("All");
  const options = [
    "All",
    ...new Set(projects.map((project) => project.seededIn)),
  ];
  const filteredProjects = (i) => {
    let toBeReturned;
    if (i === "All") {
      toBeReturned = projects;
    } else {
      toBeReturned = projects.filter((project) => {
        return project.seededIn === i;
      });
    }
    return toBeReturned;
  };
  return (
    <PageWrapper>
      <Section title="Our Projects">
        Robotics and Machine Intelligence (RMI) is the official robotics and
        technical research club of NIT Trichy. We are a close-knit community of
        technology enthusiasts from diverse backgrounds who take an interest in
        building things for the greater good of those around us and bringing
        innovation into our everyday lives. Being one of the oldest technical
        clubs of the institute, established in 2005, the melange of projects and
        domains that we, as RMI, delve into has always been ever-expanding.{" "}
        <br />
        <br />
        With the vision to develop solutions that can be implemented in
        real-time, we, as a team, work with domains encompassing designing and
        solid modelling, electronics and embedded systems, control systems,
        computer vision and artificial intelligence, and machine learning. We
        also partake in competitions, exhibitions and symposiums in addition to
        conducting workshops and events to further the spirit of learning and
        growth among all.
      </Section>
      <Selector
        title={"Seeded in"}
        options={options}
        val={val}
        setVal={setVal}
      />
      <ProjectCards
        sx={{
          width: {
            xs: "96%",
            md: "fit-content",
          },
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          },
        }}
      >
        {filteredProjects(val).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectCards>
    </PageWrapper>
  );
};

export default ProjectsPageHolder;
