import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
        <Hero heading='Services' message='The following are the services I offer.' />
        <Portfolio />
    </div>
  )
}

export default work