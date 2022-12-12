import React from 'react'
import './FormStyle.css'

const Form = () => {
    return (
        <div className='form'>
            <form action="">
                <label>Your Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Your Name</label>
                <input type="subject" />
                <label>Details</label>
                <textarea placeholder='Type a short message here' rows="6" />
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form