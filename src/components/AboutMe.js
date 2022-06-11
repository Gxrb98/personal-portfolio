import React from 'react'
import "./Styles/AboutMeStyles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faLanguage } from '@fortawesome/free-solid-svg-icons'
const AboutMe = () => {
    return (
        <div className='about'>
            <div className='text-center'>
                <h3 id="about-me">Hi, I am Gabriel</h3>
                <br />
                <p>I love coding... web coding mostly, but when I'm not coding I'm excercising or playing
                    videogames. I have more than 2 years experience as web developer with react hooks, using third party API integrations, styling components,
                    react-router-dom.</p>
                <p>I'm currently living in Ciudad Guayana, Venezuela, but willing to relocate</p>
                <br />
            </div>
            <FontAwesomeIcon icon={faLaptopCode}
                style={{ fontSize: "3.5rem", color: 'white' }}
            />
            <br />
            <p>Tecnologies I work with:</p>
            <br />
            <ul>
                <li>React / Nextjs</li>
                <li>HTML5 / CC3</li>
                <li>Javascript / Typescript</li>
                <li>Git</li>
                <li>TailwindCSS</li>
            </ul>
            <br />
            <FontAwesomeIcon icon={faLanguage}
                style={{ fontSize: "3.5rem", color: 'white' }}
            />
            <br />
            <p>Languages I know:</p>
            <br />
            <ul>
                <li>Spanish (My native Languge)</li>
                <li>English</li>
                <li>Portuguesse (Read only)</li>
            </ul>
        </div>
    )
}

export default AboutMe
