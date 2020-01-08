import React from 'react'

import '../styles/tree.scss'

export const Tree = props => {
  return (
    <div className={`tree tree-${props.order}`}>
      <div className="trunk"></div>
      <div className="leaves"></div>
    </div>
  )
}