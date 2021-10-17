import React, {useState, Fragment} from 'react';
import "./Styles.css";
const Nav = () => {

    


    return ( 
        <Fragment>
              <ul className="nav">
               <li><a href="#aboutMe">About me</a></li>
               <li><a href="#myWork">My works</a></li>
               <li><a href="#contact">Contact info</a></li>
              </ul>  
        </Fragment>
 );
}
 
export default Nav;
