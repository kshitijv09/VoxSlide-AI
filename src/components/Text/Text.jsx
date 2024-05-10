import React from 'react'
import "./Text.css"
import {useNavigate } from 'react-router-dom'

export default function Text() {
  const navigate=useNavigate()
  const pathHandler=()=>{
    navigate("/audio")
  }
  return (
    <div className='text-cont'>
      <div className='text-inner-cont'>
        <div className='bold-cont'id="b">
          <h1 className='bold'>
            Elevating Your
            </h1>
        <h1 className='bold'>
            Content with AI
        </h1>
        <h1 className='bold'>
            Clip Creation
        </h1>
        </div>
        <div className='small-cont'>
        <h2 className='small'>
        Your Gateway to Interactive Learning and Content Creation  
        </h2>
        <h2 className='small'>
            Through Voice and Vision 
        </h2>
        </div>
        <button className='create-btn' onClick={pathHandler}>
            <div>
            Create Video
              </div>
              <div>
              &#x2192;
                </div>
        </button>
      </div>
    </div>
  )
}
