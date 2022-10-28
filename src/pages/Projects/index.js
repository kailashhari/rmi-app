import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import Section from '../../components/Section'
import TopLevel from './TopLevel'
import sectionContents from '../../content/sectionContents.json';

const index = () => {
  return (
    <PageWrapper>
    <Section title={"Our Projects"}>
        {sectionContents.ourProjects}
      </Section>
      <TopLevel />
    </PageWrapper>
  )
}

export default index