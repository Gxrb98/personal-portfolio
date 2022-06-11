import { Fragment } from "react";
import Nav from '../components/Nav';
import Main from '../components/Main';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Footer from "../components/Footer";


function Home() {
    return (
        <Fragment>
            <Nav />
            <Main />
            <AboutMe />
            <Projects />
            <Footer />
        </Fragment>
    );
}

export default Home;