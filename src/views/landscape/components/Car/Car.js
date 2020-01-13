import React from 'react'
import './car.scss'

export const Car = props => {
  const { direction } = props

  return (
    <div className={`car car-${direction}`}>
      <div className="car-body">
        <div className="wheel wheel-left"></div>
        <div className="wheel wheel-right"></div>
        <div className="windows"></div>
      </div>
    </div>
  )
}