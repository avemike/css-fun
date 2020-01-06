import React from 'react'
import { Car } from './Car'
import '../styles/street.scss'

export const Street = () => {
  return (
    <div className="street">
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
      <Car />
    </div>
  )
}