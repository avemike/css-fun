import React from 'react'
import './panel.scss'

export const Panel = (props) => {
  const { title } = props
  let titleElement = ''

  if(title) titleElement = <h1 className="title" > {title} </h1>
  return (
    <div className="panel">
      { titleElement }
      { props.children }
    </div>
  )
}