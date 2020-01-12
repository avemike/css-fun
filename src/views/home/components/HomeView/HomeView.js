import React from 'react'
import { Panel } from '../../../../components/showcasePanel/Panel'
import './home.scss'

export const HomeView = () => {
  return (
    <Panel>
      <div className="home">
          <h1>Hello</h1>
          <p>This project is kinda my personal CSS showcase and a place to play with my css-styling abilities.</p>
          <p>Frankly I wanted to create something cool. Something I can show other people for which I won't have to be ashamed.</p>
          <p>I'm using React, React-router and SCSS (not vanilla css, yes, but mainly I utilize from it nested selectors and variables)</p>
      </div>
    </Panel>
  )
}