import React, {Fragment, useState, useEffect, useRef} from 'react';
import "./Styles/NavStyles.css";
const Nav = () => {
   const [show, setShow] = useState(true);
   const positionRef = useRef(0);
   
    useEffect(() => {
        
        const navControl = () =>{
            
        if(document.body.getBoundingClientRect().top >
        positionRef.current){
            console.log(positionRef.current + " UP")
            setShow(true);
        }else{
            setShow(false);
            positionRef.current = document.body.getBoundingClientRect().top;
            console.log(positionRef.current + "Down")
        }           
         }

         window.addEventListener("scroll", navControl);
        return () => {
            window.removeEventListener("scroll", navControl);
        }
    })
    return ( 
        <Fragment>
              <ul className={`${show && 'nav'}`}>
               <li><a href="#aboutMe" className="link">About me</a></li>
               <li><a href="#myWork" className="link">My works</a></li>
               <li><a href="#contact" className="sendMessage">Send a Message</a></li>
              </ul>  
        </Fragment>
 );
}
 
export default Nav;
