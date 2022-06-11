import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Styles/Footer.css";

export const Footer = () => {
    return (
        <ul id='footer'>
            <a href='https://github.com/Gxrb98' target='_blank' rel="noreferrer"><li>
                <FontAwesomeIcon icon={faGithub}
                    style={{ color: 'black', fontSize: '4rem' }}
                />
            </li></a>
            <a href='https://www.linkedin.com/in/garb98/' target='_blank' rel="noreferrer"><li>
                <FontAwesomeIcon icon={faLinkedin}
                    style={{ color: '#0072b1', fontSize: '4rem' }}
                />
            </li></a>
        </ul>
    );
}

export default Footer
