import React, {Fragment} from 'react'
import './Styles/sendMessage.css'
const SendMessage = () => {
    return (
        <Fragment>
            <div className='wrapper'>
            <header>
                <h1>Thanks for taking the time to reach out</h1>
            </header>
            <form className='form' action=''>
                <label for='name'>Name</label>
                <input className='textbox' name='name' type='text'/>
                <label for='email'>Email</label>
                <input className='textbox' name='email' type='email'/>
                <label for='message'>Message</label>
                <textarea>
                </textarea>
                <input id='btn-submit' type='submit' value='Submit'/>
            </form>
            </div>
        </Fragment>
    )
}

export default SendMessage
