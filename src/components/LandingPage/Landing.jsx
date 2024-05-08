import React from 'react'
import Navbar from '../Navbar/Navbar'
import Body from '../Body/Body'
import Card from '../Card/Card'
import "./Landing.css"
export default function Landing() {
  return (
    <div className='landing-page'>
        <Navbar/>
        <Body/>
        <Card/>
    </div>
  )
}
