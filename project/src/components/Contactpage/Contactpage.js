import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Stay Connected</h2>
         <p className='contactpara'> Make every interaction count, even the small ones. They are all relevant. Contact me and let's stay connected.<br/> I’m currently searching for opportunities for a front-end developer role. <br /> If there is any vacancy my inbox is always open. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll try my best to get back to you!</p> 
       {/* <p > </p> */}
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+9363559057");
          }}
        >Say Hi</button>
        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> 
        Designed & Built by <span>Harsini</span></p>
      </Container>
    </div>
  )
}

export default Contactpage