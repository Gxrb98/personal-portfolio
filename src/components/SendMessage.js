import React, {Fragment} from 'react'
import './Styles/sendMessage.css'
import emailjs from 'emailjs-com'

const SendMessage = () => {

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('contact_service', 'contact_form', e.target, 'FeauU2-plERrxk0An')
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
                    e.target.reset()
    }
    return (
        <Fragment>
            <div className='wrapper'>
            <header>
                <h1>Thanks for taking the time to reach out</h1>
            </header>
            <form className='form' onSubmit={sendEmail}>
                <label for='name'>Name</label>
                <input className='textbox' name='name' type='text'/>
                <label for='email'>Email</label>
                <input className='textbox' name='email' type='email'/>
                <label for='subject'>Subject</label>
                <input className='textbox' name='subject' type='text'/>
                <label for='message'>Message</label>
                <textarea className='textarea' name='message'>
                </textarea>
                <input type='submit' id='btn-submit'  value='Submit'/>
            </form>
            </div>
        </Fragment>
    )
}

export default SendMessage
