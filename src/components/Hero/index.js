import { styled } from '@mui/material'
import React from 'react'

const HeroLayout = styled('div')({
  display: 'flex',
  width: '80%',
  minHeight: '60vh',
  marginInline: 'auto',
  alignItems: 'center',
  justifyContent: 'center'
});

const HeroSectionLayout = styled('div')({
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
})

const Hero = (props) => {
  return (
    <HeroLayout>{props.children}</HeroLayout>
  )
}

const HeroSection = (props) => {
  return (
    <HeroSectionLayout>{props.children}</HeroSectionLayout>
  )
}

export {Hero, HeroSection};
export default Hero