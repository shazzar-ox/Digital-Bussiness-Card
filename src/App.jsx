import { useState } from 'react'
import Info from './Info'
import About  from './About'
import Interest  from './Interest'
import Footer  from './Footer'
import './App.css'

const BusinessCard = () => {
  return (
    <>
    <Info />
    <About />
    <Interest/>
    <Footer />
    </>
  )
}

export default BusinessCard