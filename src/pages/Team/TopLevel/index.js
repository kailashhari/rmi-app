import { styled } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../../constants';
import Members from '../Members'
import Alumni from '../Alumni'
import Facad from '../Facad'

const Tabs = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  width: 'fit-content',
  margin: 'auto',
  position: 'relative',
  cursor: 'pointer',
});

const Tab = styled('div')({
  fontFamily: 'Poppins',
  fontSize: '1.4rem',
  color: colors.primary,
});

const Indicator = styled('div')({
  backgroundColor: colors.primary,
  height: '0.2rem',
  position: 'absolute',
  transition: 'all 0.2s ease-in-out',
});

const Index = () => {
  const [tab, setTab] = useState(0)
  const memberRef = useRef(null);
  const alumniRef = useRef(null);
  const facadRef = useRef(null);
  const tabsRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const tabsCoords = tabsRef.current.getBoundingClientRect();
    let coords;
    if(tab === 0) {
      coords = memberRef.current.getBoundingClientRect();
    } else if(tab === 1) {
      coords = alumniRef.current.getBoundingClientRect();
    } else if(tab === 2) {
      coords = facadRef.current.getBoundingClientRect();
    }
    console.log(coords)
    indicatorRef.current.style.left = `${coords.left - tabsCoords.left}px`;
    indicatorRef.current.style.width = `${coords.width}px`;
    indicatorRef.current.style.top = `${coords.top - tabsCoords.top + coords.height}px`;
  }, [tab, indicatorRef, tabsRef, memberRef, alumniRef, facadRef])

  return (
    <>
      <Tabs ref={tabsRef}>
        <Tab onClick={() => setTab(0)} ref={memberRef}>Members</Tab>
        <Tab onClick={() => setTab(1)} ref={alumniRef}>Alumni</Tab>
        <Tab onClick={() => setTab(2)} ref={facadRef}>Faculty Advisor</Tab>
        <Indicator ref={indicatorRef} />
      </Tabs>
      {tab === 0 && <Members />}
      {tab === 1 && <Alumni />}
      {tab === 2 && <Facad />}
    </>
  )
}

export default Index