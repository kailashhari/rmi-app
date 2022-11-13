import React, { useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import Section from "../../components/Section";
import TopLevel from "./TopLevel";
import sectionContents from "../../content/sectionContents.json";

const index = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <PageWrapper>
      <Section title={"Our Team"}>{sectionContents.ourTeam}</Section>
      <TopLevel />
    </PageWrapper>
  );
};

export default index;
