

import {Fragment} from "react";
import Nav from './components/Nav';
import Main from './components/Main';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    <Fragment>
     <Nav/>
      <Main/>
        <FontAwesomeIcon icon={faLinkedin} style={{fontSize: "3em"}}/>
        <FontAwesomeIcon icon={faGithub} style={{fontSize: "3em"}}/>
    </Fragment>
  );
}

export default App;
