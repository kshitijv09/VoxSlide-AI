import React from 'react'
import "./Text.css"
export default function Text() {
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
            Video Creation
        </h1>
        </div>
        <div className='small-cont'>
        <h2 className='small'>
            Experience the magic of our AI Video Generator as it swiftly Selects the  
        </h2>
        <h2 className='small'>
            Perfect Creative Media Assets for Your Video 
        </h2>
        </div>
        <button className='create-btn'>
            Create Video &#x2192;
        </button>
      </div>
    </div>
  )
}
