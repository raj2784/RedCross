import React from 'react'

const ContactUs = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1>Contact Us</h1>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" class="form-control" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;