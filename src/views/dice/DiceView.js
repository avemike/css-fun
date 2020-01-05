import React from 'react'

import Panel from '../../components/showcasePanel';
import { Dice } from './components/Dice'

export const DiceView = () => {
  return (
    <Panel title="Dice model 3D">
      <Dice />
    </Panel>
  )
}