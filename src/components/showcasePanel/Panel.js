import React from 'react'
import './panel.scss'

export const Panel = (props) => {
  return (
    <div className="panel">
      { props.children }
    </div>
  )
}