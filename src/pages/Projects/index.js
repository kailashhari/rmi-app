import React, { useEffect } from "react";
import Selector from "../../components/Selector";
import { styled } from "@mui/system";
import ProjectCard from "./ProjectCard";
import PageWrapper from "../../components/PageWrapper";
import Section from "../../components/Section";
import sectionContents from "../../content/sectionContents.json";
import { AppContext } from "../../store/context";
// import { primaryColor, lightText, shadeText } from '../../theme/colors';

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
      <Section title="Our Projects">{sectionContents.ourTeam}</Section>
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

// import React from "react";
// import PageWrapper from "../../components/PageWrapper";
// import Section from "../../components/Section";
// import TopLevel from "../Projects/TopLevel";
// import sectionContents from "../../content/sectionContents.json";

// const index = () => {
//   return (
//     <PageWrapper>
//       <Section title={"Our Projects"}>{sectionContents.ourProjects}</Section>
//       <TopLevel />
//     </PageWrapper>
//   );
// };

// export default index;
