import React from 'react'
import { Panel } from '../../../../components/showcasePanel/Panel'
import './dark.scss'

export const Dark = () => {
  return (
    <Panel>
      <div className="dark">
        <div className="image"></div>
        <div className="filter"></div>
      </div>
    </Panel>
  )
}