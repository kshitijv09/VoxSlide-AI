import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Body from '../../components/Body/Body'
import Card from '../../components/Card/Card'
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
