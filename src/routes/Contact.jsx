import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import NavBar from '../components/NavBar'

const Contact = () => {
  return (
    <div>
    <NavBar />
    <HeroImg heading="Contact" />
    <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
