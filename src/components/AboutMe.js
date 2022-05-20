import React, {Fragment} from 'react'
import "./Styles/AboutMeStyles.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLaptopCode, faLanguage} from '@fortawesome/free-solid-svg-icons'
const AboutMe = () => {
    return (
        <Fragment>
            <div  className='about'>
                <h3 id="about-me">Hi, I am Gabriel</h3>
                <br/>
                <p>I love coding... web coding mostly, but when I'm not coding I'm excercising or playing 
                videogames. I have 2 years experience as freelancer with react hooks, third party integrations, styling components,
                react-router-dom.</p>
                <p>I'm currently living in Ciudad Guayana, Venezuela, but willing to relocate</p>
                <br/>
                <FontAwesomeIcon icon={faLaptopCode} 
                 style={{fontSize: "3.5rem", color: 'white'}}
                   />
                   <br/>
                <p>Tecnologies I work with:</p>
                <br/>
                <ul>
                    <li>React</li>
                    <li>HTML5</li>
                    <li>CSS3</li>   
                    <li>Javascript</li>
                    <li>Git</li>
                    <li>Github</li>        
                 </ul>
                 <br/>
                 <FontAwesomeIcon icon={faLanguage} 
                style={{fontSize: "3.5rem", color: 'white'}}
                   />
                <br/>
                <p>Languages I know:</p>
                <br/>
                <ul>
                    <li>Spanish (My native Languge)</li>
                    <li>English</li>
                    <li>Portuguesse (Read only)</li>     
                 </ul>
            </div>
        </Fragment>
    )
}

export default AboutMe
