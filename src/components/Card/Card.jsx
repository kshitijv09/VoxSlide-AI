import React from 'react'
import "./Card.css"
import audio from "../../assets/audio.png"
export default function Card() {
  return (
    <div className='card-block'>
      <div className='card container'>
        <div className='card-1'>
            <h1> Create Videos From</h1>
            <h1> Text in Minutes</h1>
            <div class="btn-cont">
            <h3>Write details of your video content</h3>
            <button>
              Create Video
            </button>
          </div>
        </div>
      </div>
      <div className='card container'>
        <div className='card-2'>
        <h1> Create Videos From</h1>
            <h1> Audio in Minutes</h1>
            <div class="btn-cont" id="c-2">
            <h3>Write details of your video content</h3>
            <button>
              Create Video
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
