import React from 'react';
import Panel from '../../../../components/showcasePanel';
import './style.scss';

export const GlitchBox = () => {
  return (
    <Panel title="Glitch Effect">
      <div className="glitch-box">
          <div className="glitched__img"></div>
          <div className="glitched__img"></div>
          <div className="glitched__img"></div>
          <div className="glitched__img"></div>
          <div className="glitched__img"></div>
          <div className="text">
              <h1>Glitch effect</h1>
              <h3>Trashy but got the idea</h3>
          </div>
      </div>
    </Panel>
  )
}