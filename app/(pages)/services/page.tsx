import React from 'react'
import WhatWeDo from '../../components/Whatwedo/WhatWeDo'
import Growth from '../../components/Growth/Growth'
import Faq from '../../components/Faq/Faq'
import Cta from '../../components/Cta/Cta'
import { servicesData } from '../../data/servicesData'
import AboveFold from '../../components/AboveFold/AboveFold'

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboveFold
        title={servicesData.title}
        subtitle={servicesData.subtitle}
        ctaText={servicesData.ctaText}
        backgroundImage={servicesData.backgroundImage}
      />
      
      {/* Services Overview */}
      <WhatWeDo />
      
      {/* Detailed Services */}
      <Growth />
      
      {/* FAQ Section */}
      <Faq />
      
      {/* CTA Section */}
      <Cta />
    </div>
  )
}

export default Services 