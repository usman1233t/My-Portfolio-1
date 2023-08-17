import "./Contact.scss"
import React from 'react'

const Contact = () => {
  return (
   <form>
    <h1>Contact <span className='me'>Me</span></h1>
    <input type="text" name= "name" id="" placeholder='Enter name'/>
    <input type="email" name= "email" id="" placeholder='example@gmail.com'/>
    <input type="phone" name= "phone" id="" placeholder='92'/>
    <textarea name="message" id="" cols="30" rows="10" placeholder='type here'/>
    <button type="submit">Send</button>

   </form>
    
  )
}

export default Contact