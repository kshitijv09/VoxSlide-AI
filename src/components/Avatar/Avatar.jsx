import React from 'react'
import "./Avatar.css"
import avatar1 from "../../assets/avatar1.png"
export default function Avatar() {
  return (
    <div className='avatar-cont'>
      <div className='img-cont'>
        <img src={avatar1} className='img'></img>
      </div>
    </div>
  )
}
