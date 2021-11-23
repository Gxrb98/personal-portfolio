import {Fragment} from "react";
import Nav from './components/Nav';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
//import Projects from './components/Projects';
import SendMessage from './components/SendMessage';

function App() {
  return (
    <Fragment>
      <Nav/>
      <Main/>
      <AboutMe/>
      {/*<Projects/>*/}  
      <SendMessage/>
    </Fragment>
  );
}

export default App;
