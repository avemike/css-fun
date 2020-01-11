import React from 'react'

import './street.scss'

import { Car } from '../Car'
import { Lantern } from '../Lantern'
import { Tree } from '../Tree';
import { House } from '../House/House';


export const Street = () => {

  const generateTrees = (n) => {
    const treesArray = []
    for (let i = 0; i < n; i++) {
      treesArray.push(
        <Tree order={ i+1 }/>
      )
    }
    return treesArray
  }

  return (
    <div className="street">
      <div className="houses">
        <House />
        <House />
        <House />
      </div>
      <div className="trees">
        { generateTrees(11) }
      </div>
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