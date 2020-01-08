import React from 'react'
import Panel from '../../../../components/showcasePanel'
import './waterball.scss'

export const Waterball = () => {
  return (
    <Panel title="Water Ball Animation">
      <div className="water-ball">
        <div className="water water-back">
          <img src={process.env.PUBLIC_URL + "img/water_anim/water_back.png"}></img>
        </div>
        <div className="clouds clouds-back">
          <img src={process.env.PUBLIC_URL + "img/water_anim/clouds_back.png"}></img>
        </div>
        <div className="sun">
          <img src={process.env.PUBLIC_URL + "img/water_anim/sun.png"}></img>
        </div>
        <div className="clouds clouds-front">
          <img src={process.env.PUBLIC_URL + "img/water_anim/clouds_front.png"}></img>
        </div>
        <div className="water water-front">
          <img src={process.env.PUBLIC_URL + "img/water_anim/water_front.png"}></img>
        </div>
        <div className="shine">
          <img src={process.env.PUBLIC_URL + "img/water_anim/shine.png"}></img>
        </div>
      </div>
    </Panel>
  )
}