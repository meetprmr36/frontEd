import React from 'react'

const NewsLater = () => {
    return (
        <div className='NewsLater-main'>
            <div className='overlay'></div>
            <div className='NewsLater-content'>
                <div className='Cotain'>
                    <h1 className='Later-heading'>News Letter</h1>
                    <p> Sign up with your email to get updates fresh updates about our events</p>
                    <form className='Form-news'>
                        <div className='Input-group'>
                            <input
                                type="email"
                                name="email"
                                id="newsletter-email"
                                autoComplete="email"
                                className="form-control"
                                placeholder="Enter Your Email Address"
                            />
                            <span className="input-group-btn">
                                <button href="#" className="Button-border" type="button">SIGN UP</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default NewsLater