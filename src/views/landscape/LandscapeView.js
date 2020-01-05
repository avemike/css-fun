import React from 'react';
import './styles/landscape.scss'
import Panel from '../../components/showcasePanel';

export const LandscapeView = () => {
  return (
    <Panel>
      <div className="landscape-view">
        {/* First surface is background, last is foreground*/}
        <div className="surface"></div>
        <div className="surface"></div>
        <div className="surface">
          <div className="car"></div>
        </div>   
      </div>
    </Panel>
  )
}