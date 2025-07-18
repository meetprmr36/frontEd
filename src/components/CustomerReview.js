import React from 'react'
import BgpicCompo2 from './BgpicCompo2'

const CustomerReview = () => {
    return (
        <BgpicCompo2
            img='https://demoxml.com/html/restaurant/assets/images/testimonial-bg.jpg'
            heading='Our Customer Says'
            secondheadingWhite='TESTIMONIALS'
        >
            <div className='Row'>
                <div className='Customer-review'>
                    <p>These days are all Happy and Free. These days are all share them with me oh baby. Come and listen to a story about a man named Jed - a poor mountaineer barely kept his family fed. Here's the story of a lovely lady who was bringing up three very lovely girls.</p>
                    <i>
                        <img src='	https://demoxml.com/html/restaurant/assets/images/quote.png' alt='Dash'></img>
                        <h2>- Jhone Dheve</h2>
                    </i>
                </div>
            </div>
        </BgpicCompo2>
    )
}
export default CustomerReview