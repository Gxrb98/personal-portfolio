import { Fragment } from "react";
import Nav from '../components/Nav';
import SendMessage from '../components/SendMessage';
import Footer from "../components/Footer";

function Contact() {
    return (
        <Fragment>
            <Nav />
            <SendMessage />
            <Footer />
        </Fragment>
    );
}

export default Contact;