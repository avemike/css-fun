import React from 'react'
import Panel from '../../components/showcasePanel'
import './waterBall.scss'

export const WaterBall = () => {
  return (
    <Panel>
      <div className="water-ball">
        <div className="water water-back">
          <img src={process.env.PUBLIC_URL + "img/water_anim/water_back.png"}></img>
        </div>
        <div className="water water-front">
          <img src={process.env.PUBLIC_URL + "img/water_anim/water_front.png"}></img>
        </div>
      </div>
    </Panel>
  )
}