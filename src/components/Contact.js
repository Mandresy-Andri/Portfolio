import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Contact = () => {
  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          nameInput.current.value = '';
          emailInput.current.value = '';
          messageInput.current.value = '';
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact revealUp'>
      <CardGroup>
        <Card className='border-0'>
          <Card.Body>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input type="text" name="user_name" className="form-control" required ref={nameInput}/>
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input type="email" name="user_email" className="form-control" ref={emailInput} required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" className="form-control" required ref={messageInput}/>
              </div>
              <div className="form-group pt-4">
              <input type="submit" value="Send" className="btn btn-primary" />
              </div>
            </form>
          </Card.Body>
        </Card>
        <Card className='border-0'>
          <Card.Body>
            <Card.Title><h1 className='pt-3'>Contact Me</h1></Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>  
    </div>
  );
};

export default Contact;
