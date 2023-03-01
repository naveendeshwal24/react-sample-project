import React from 'react'

const Contact = () => {
  return (
    <div className ='contact'>
      <main>
        <h1>Contact Us</h1>
        <form action="">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" required placeholder='abc'/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" required placeholder='@email'/>
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <input type="text" required placeholder='description...'/>
            </div>
            <button type="submit">Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
