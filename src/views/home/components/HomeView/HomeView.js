import React from 'react'
import { Panel } from '../../../../components/showcasePanel/Panel'
import './home.scss'

export const HomeView = () => {
  return (
    <Panel>
      <div className="home">
        <h1 className='highlight'>Hello</h1>
        <p>This project is kind of my personal CSS showcase and a place to play with my css-styling abilities.</p>
        <p>Frankly I wanted to create something cool. Something I can show other people for which I won't have to be ashamed.</p>
        <p>I've used <span className='highlight'>React</span>, <span className='highlight'>React-router </span>and <span className='highlight'>SCSS</span> (not vanilla css, but its main features I've utilized is nested selectors and variables).</p>
        <p>It's CSS centred project, so I've restrained myself from using React too much and used solely its basic functionalities.</p>
      </div>
    </Panel>
  )
}