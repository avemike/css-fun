import React from 'react'
import './house.scss'

export const House = () => {
  return (
    <div className='house'>
      <div className="lower-body">
        <div className="window">
          <div className="horizontal-line line"></div>
          <div className="vertical-line line"></div>
        </div>
        <div className="window">
          <div className="horizontal-line line"></div>
          <div className="vertical-line line"></div>
        </div>
        <div className="window">
          <div className="horizontal-line line"></div>
          <div className="vertical-line line"></div>
      </div>
        <div className="door">
          <div className="handle"></div>
        </div>
      </div>
      <div className="upper-body">
        <div className="window window-rounded">
          <div className="horizontal-line line"></div>
          <div className="vertical-line line"></div>
        </div>
      </div>
      <div className="roof">
        <div className="roof-element left"></div>
        <div className="roof-element right"></div>
        <div className="roof-apex"></div>
      </div>
    </div>
  )
}