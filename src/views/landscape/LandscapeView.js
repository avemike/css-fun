import React from 'react';
import './styles/landscape.scss'
import Panel from '../../components/showcasePanel';
import { Street } from './components/Street';

export const LandscapeView = () => {
  return (
    <Panel title="City Landscape">
      <div className="landscape-view">
        {/* First surface is background, last is foreground*/}
        <div className="surface"></div>
        <div className="surface"></div>
        <div className="surface">
          <Street/>
        </div>
      </div>
    </Panel>
  )
}