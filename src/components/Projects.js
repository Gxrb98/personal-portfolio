import React, { Fragment } from 'react'
import quoteGenerator from '../img/quoteGenerator.png'
import "./Styles/ProjectsStyles.css";

function Projects() {
  return (
    <Fragment>
      <div>
        <div className='projects'>
          <h1>My recent work</h1>
          <p id='my-work' >Here are a few projects I've worked on</p>
        </div>
        <div className='projects'>
          <h2>Anime quotes Generator</h2>
          <a href='https://gxrb98.github.io/animequotesgenerator/' rel="noreferrer" target='_blank' >
            <img src={quoteGenerator} alt='Quote Generator' className='img' />
          </a>
          <p>It uses an API to generate a new phrase every time you hit the button</p>

        </div>
      </div>
    </Fragment>
  )
}

export default Projects
