import { styled } from '@mui/material'
import React from 'react'
import { fontStyles } from '../../constants'

const Section = styled('div')({
  maxWidth: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
})

const SectionTitle = styled('div')({
  ...fontStyles.heading,
  margin: '2.6rem',
})

const SectionContent = styled('div')({
  ...fontStyles.content,
  width: '42%',
  textAlign: 'center',
})

const index = (props) => {
  return (
    <Section>
      <SectionTitle>
        {props.title}
      </SectionTitle>
      <SectionContent>
        {props.children}
      </SectionContent>
    </Section>
  )
}

export default index