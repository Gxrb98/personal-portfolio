import React, {Fragment, useState, useEffect, useRef} from 'react';
import "./Styles/NavStyles.css";
const Nav = () => {
   const [show, setShow] = useState(true);
   const positionRef = useRef(0);
   
   
    useEffect(() => {
        
        const navControl = () =>{
       //Evalua y Guarda una nueva posicion de referencia mutable     
        if(document.body.getBoundingClientRect().y >
        positionRef.current){
            positionRef.current = document.body.getBoundingClientRect().y; 
            setShow(true); 
        }else{
            
            positionRef.current = document.body.getBoundingClientRect().y;
            setShow(false);
        }           
         }

         window.addEventListener("scroll", navControl);
        return () => {
            window.removeEventListener("scroll", navControl);
        }
    })
    return ( 
        <Fragment>
            <header>
              <ul className={`${show && 'nav'}`}>
               <li><a href="#about-me" className="link">About me</a></li>
               <li><a href="#my-work" className="link">My Work</a></li>
               <li><a href="#contact" className="sendMessage">Send a Message</a></li>
              </ul>  
            </header>
        </Fragment>
 );
}
 
export default Nav;
