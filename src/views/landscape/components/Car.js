import React from 'react'
import '../styles/car.scss'

export const Car = () => {
  return (
    <div className="car">
      <div className="car-body">
        <div className="wheel wheel-left"></div>
        <div className="wheel wheel-right"></div>
        <div className="windows"></div>
      </div>
    </div>
  )
}