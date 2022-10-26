import { styled } from '@mui/material'
import React from 'react'
import YearSelector from '../YearSelector'
import Card from './Card'

const CardGrid = styled('div')({
  width: 'fit-content',
  marginInline: 'auto',
  display: 'grid',
  gridGap: '2.4rem',
  gridTemplateColumns: 'repeat(3, minmax(14rem, 1fr))',
  marginTop: '3.2rem',
});

const Index = () => {
  const [year, setYear] = React.useState(1)
  const options = [
    'All', 'Batch of 2023', 'Batch of 2024', 'Batch of 2025'
  ]
  return (
    <>
      <YearSelector options={options} year={year} setYear={setYear}/>
      <CardGrid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardGrid>
    </>
  )
}

export default Index