import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { styled } from '@mui/material';

const StaticBackground = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: '-1',
  opacity: '0.11',
  background: 'radial-gradient(ellipse at bottom, #1693FF 0%, #464646 60%, #000000 100%)',
});

const PageContent = styled('div')({
  width: '100vw',
  zIndex: '1',
  marginTop: '6rem'
});

const index = (props) => {
  return (
    <div>
      <Header />
      <PageContent>
        {props.children}
      </PageContent>
      <StaticBackground />
      <Footer />
    </div>
  )
}

export default index