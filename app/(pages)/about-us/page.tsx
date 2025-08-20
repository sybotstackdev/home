import React from 'react'
import OurStory from '../../components/OurStory/OurStory'
import OurValue from '../../components/OurValue/OurValue'
import Cta from '../../components/Cta/Cta'
import AboveFold from '../../components/AboveFold/AboveFold'
import { aboutUsData } from '../../data/aboutUsData'

const About = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <AboveFold
        title={aboutUsData.hero.title}
        subtitle={aboutUsData.hero.subtitle}
        ctaText={aboutUsData.hero.ctaText}
        backgroundImage={aboutUsData.hero.backgroundImage}
      />

      {/* Our Story Section */}
      <OurStory />
      {/* Our Values Section */}
      <OurValue />

      {/* What We Do Section */}

      {/* CTA Section */}
      <Cta />
    </div>
  )
}

export default About