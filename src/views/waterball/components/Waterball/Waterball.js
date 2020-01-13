import React from 'react'
import Panel from '../../../../components/showcasePanel'
import './waterball.scss'

export const Waterball = () => {
  return (
    <Panel title="Water Ball Animation">
      <div className="water-ball">
        <div className="water water-back">
          <img src={process.env.PUBLIC_URL + "img/water_anim/water_back.png"} alt="Water waves in background of the animation"></img>
        </div>
        <div className="clouds clouds-back">
          <img src={process.env.PUBLIC_URL + "img/water_anim/clouds_back.png"} alt="Clouds in background of the animation"></img>
        </div>
        <div className="sun">
          <img src={process.env.PUBLIC_URL + "img/water_anim/sun.png"} alt="Sun in centre of the animation"></img>
        </div>
        <div className="clouds clouds-front">
          <img src={process.env.PUBLIC_URL + "img/water_anim/clouds_front.png"} alt="Clouds in foreground of the animation"></img>
        </div>
        <div className="water water-front">
          <img src={process.env.PUBLIC_URL + "img/water_anim/water_front.png"} alt="Water waves in foreground of the animation"></img>
        </div>
        <div className="shine">
          <img src={process.env.PUBLIC_URL + "img/water_anim/shine.png"} alt="Little shine on the right of waterball"></img>
        </div>
      </div>
    </Panel>
  )
}