import React from 'react';

import './landscape.scss'

import Panel from '../../../../components/showcasePanel';
import { Street } from '../Street';

export const Landscape = () => {
  return (
    <Panel title="City Landscape">
      <div className="landscape">
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