import React, {Fragment} from 'react'
import "./Styles/AboutMeStyles.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLaptopCode, faLanguage} from '@fortawesome/free-solid-svg-icons';
const AboutMe = () => {
    return (
        <Fragment>
            <div className='aboutMe'>
                <h3 id="about-me">Hi, My I am Gabriel</h3>
                <br/>
                <p>I love coding... web coding mostly, but when I'm not coding I'm excercising or playing 
                videogames. I have almost completed my degree in System Engineering and living in Ciudad 
                Guayana, Venezuela, but, I'm willing to relocate to USA.</p>
                <br/>

                <FontAwesomeIcon icon={faLaptopCode} 
                 style={{fontSize: "3rem", color: 'white'}}
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
                style={{fontSize: "3rem", color: 'white'}}
                   />
                <br/>
                <p>Languages I know:</p>
                <br/>
                <ul>
                    <li>Spanish (My native Languge)</li>
                    <li>English</li>
                    <li>Portuguesse (Read)</li>     
                 </ul>
            </div>
        </Fragment>
    )
}

export default AboutMe
