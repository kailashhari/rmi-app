import React, { useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import Section from "../../components/Section";
import TopLevel from "./TopLevel";

const index = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <PageWrapper>
      <Section title={"Our Team"}>
        Robotics is a highly interdisciplinary field that thrives well with the
        perfect amalgamation of individuals possessing knowledge of various
        domains. We believe that great work stems from the will to grow as a
        team and the passion to create something that leaves a mark.
        <br />
        <br />
        We are driven by our mindset to stand out and inspire while staying on
        our feet to be open to learn. Our team comprises students across all
        departments of NIT Trichy who work and collaborate to bring innovative
        thoughts to life.
      </Section>
      <TopLevel />
    </PageWrapper>
  );
};

export default index;
