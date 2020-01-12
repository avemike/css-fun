import React from 'react';

import './landscape.scss'

import Panel from '../../../../components/showcasePanel';
import { Street } from '../Street';
import { Mountain } from '../Mountain';
import { Cloud } from '../Cloud';

export const Landscape = () => {
  const generateMountains = (n) => {
    const Mountains = []
    for(let i = 0; i < n; i++) {
      Mountains.push(<Mountain order={i+1}/>)
    }
    return Mountains
  }

  return (
    <Panel title="City Landscape">
      <div className="landscape">
        {/* First surface is background, last is foreground*/}
        <div className="background">
          <div className="sky">
            <Cloud />
            <Cloud />
          </div>
          { generateMountains(2) }
        </div>
        <div className="foreground">
          <Street/>
        </div>
      </div>
    </Panel>
  )
}