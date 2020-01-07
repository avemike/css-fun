import React from 'react'
import { Car } from './Car'
import { Lantern } from './Lantern'
import '../styles/street.scss'

export const Street = () => {

  return (
    <div className="street">
      <div className="lanterns">
        <Lantern />
        <Lantern />
        <Lantern />
        <Lantern />
        <Lantern />
        <Lantern />
      </div>
      <div className="street-marking-group">
        <div className="street-line"></div>
        <div className="street-line"></div>
        <div className="street-line"></div>
        <div className="street-line"></div>
        <div className="street-line"></div>
        <div className="street-line"></div>
        <div className="street-line"></div>
        <div className="street-line"></div>
        <div className="street-line"></div>
        <div className="street-line"></div>
        <div className="street-line"></div>
        <div className="street-line"></div>
        <div className="street-line"></div>
        <div className="street-line"></div>
      </div>
      <Car direction = 'left'/>
      <Car direction = 'right'/>
    </div>
  )
}