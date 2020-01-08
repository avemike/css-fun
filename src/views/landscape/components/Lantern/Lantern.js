import React from 'react'
import './lantern.scss'

export const Lantern = () => {
  return (
    <div className='lantern'>
      <div className="long-vertical-pipe"></div>
      <div className="horizontal-pipe"></div>
      <div className="short-vertical-pipe"></div>
      <div className="lightbulb">
        <div className="lightbulb-light"></div>
      </div>
    </div>
  )
}