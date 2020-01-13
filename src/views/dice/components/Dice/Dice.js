import React from 'react';
import './Dice.scss';

export const Dice = () => {
  return (
    <div className="dice-wrapper">
      <div className="dice">
        <div className="dice-wall back"></div> 
        <div className="dice-wall bottom"></div>
        <div className="dice-wall left"></div>
        <div className="dice-wall right">
          <div className="dot dot-center"></div>
        </div>
        <div className="dice-wall top">
          <div className="dot dot-center"></div>
          <div className="dot dot-upperLeft"></div>
          <div className="dot dot-bottomRight"></div>
        </div>
        <div className="dice-wall front">
          <div className="dot dot-upperLeft"></div>
          <div className="dot dot-upperRight"></div>
          <div className="dot dot-bottomLeft"></div>
          <div className="dot dot-bottomRight"></div>
          <div className="dot dot-center"></div>
        </div>
      </div>  
    </div>
  )
}