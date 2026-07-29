import React from 'react'
import GlobalNetwork from './GlobalNetwork'
import KnowledgeSharing from './KnowledgeSharing'
import KgfskillsTraining from './KgfskillsTraining'
import Support from './Support'
import BloodDonors from './BloodDonors'
import NavbarSection from '../Landing/NavbarSection'
import Footer from '../Landing/Footer'

function Services() {
  return (
    <>
    {/* <NavbarSection/> */}
    <GlobalNetwork/>
    <KnowledgeSharing/>
    <KgfskillsTraining/>
    <Support/>
    <BloodDonors/>
    </>
  )
}

export default Services