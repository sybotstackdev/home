import React from 'react'
import Contact from '../../components/Contact/Contact'
import ContactForm from '../../components/Contact/ContactForm'
import { contactData } from '../../data/contactData'
import AboveFold from '../../components/AboveFold/AboveFold'

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <AboveFold 
        title={contactData.title}
        subtitle={contactData.subtitle}
        ctaText={contactData.ctaText}
        backgroundImage={contactData.backgroundImage}
      />
      
      {/* Contact Information Section */}
      <Contact />
      
      
      {/* Contact Form Section */}
      <ContactForm />
    </div>
  )
}

export default ContactPage 