import React from 'react'

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className='about-content'>
        <div className='about-things'>
          <h1 className='About-heading'>About</h1>
          <h2 className='About-heading-second'>we are the best quality and traeditional restaurant</h2>
          <div className='Line'></div>
          <p className='About-para'>These days are all Happy and Free. These days are all share them with me oh baby. Till the one day when the lady met this fellow and they knew it was much more than a hunch. Good bye gray sky hello blue. There's nothing can hold me when I hold you.</p>
          <p className='About-para'>Now the world don't move to the beat of just one drum. What might be right for you may not be right for some. No phone no lights no motor car not a single luxury. Like Robinson Crusoe it's primitive as can be. Goodbye gray sky hello blue</p>
        </div>
        <div className='About-chef'>
          <img src='https://demoxml.com/html/restaurant/assets/images/about-thumb.jpg' alt='About Chef' className="Chef-Imge" />
          <div className=''>
            <img src='https://demoxml.com/html/restaurant/assets/images/chef-sign.png' alt='About Chef' className='Signature' />
            <div className='Chef-Name'>
              <h4>JACKLIN ROCKY</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='About-image'>
        <img src="https://demoxml.com/html/restaurant/assets/images/about-img1.jpg" alt="About Us" className='About-pic' />
        <img src="https://demoxml.com/html/restaurant/assets/images/about-img2.jpg" alt="About Us" className='About-pic' />
      </div>
    </div>
  )
}
export default AboutSection