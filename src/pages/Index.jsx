import React from 'react'
import Header from '../components/Header'
import CardsContainer from '../components/CardsContainer'

const Index = () => {
  return (
    <div className='
      mt-22 md:mt-44
      flex flex-col md:flex-row
      flex-wrap md:flex-nowrap w-full px-4
      justify-center items-center gap-6
    '>
      
        <Header />
        <CardsContainer />
     
      </div>
  )
}

export default Index

