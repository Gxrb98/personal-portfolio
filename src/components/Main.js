import React, {Fragment} from 'react';
import "./Styles/MainStyles.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faJsSquare, faReact, faHtml5, faCss3} from '@fortawesome/free-brands-svg-icons';

const Main = () => {

    return ( 
        <Fragment>
              <div id="aboutMe" className="container">
                <div className="main">  
                    <h2>System Engineer and Front-End Developer</h2> 
                    <br/><p>I code web applications with React, and I love what I do</p>
                </div>

                <div className='logos'>
                  <FontAwesomeIcon icon={faReact} 
                   style={{color: '#3c3096dc'}}
                   />

                   <FontAwesomeIcon icon={faHtml5} 
                    style={{color: '#3c3096dc'}} 
                   /> 

                   <FontAwesomeIcon icon={faCss3} 
                   style={{color: '#3c3096dc'}} 
                   /> 

                    <FontAwesomeIcon icon={faJsSquare} 
                    style={{color: '#3c3096dc'}} 
                   /> 
                </div> 
              </div>
                   
        </Fragment>
 );
}
 
export default Main;