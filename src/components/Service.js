import React from 'react'
import AfterbgContent from './AfterbgContent'

const Service = () => {
    return (
        <div className='Service'>
            <AfterbgContent
                heading="Services"
                Secondheading="OUR SPECIALITIES"
                img="https://demoxml.com/html/restaurant/assets/images/surprise-sec-bg.jpg"
            />
            <div className='Row'>
                <div className='box'>
                    <div className='Snake-box'>
                        <div className='Snake-content'>
                            <img className='Snake-img' src="https://demoxml.com/html/restaurant/assets/images/srv1.png" alt="Snake Icon" />
                            <div className='Snake-contact'>
                                <p className='Snake-order'>Order Now!</p>
                                <p className='Snake-order'>Call</p>
                                <p className='Snake-number Snake-order'>
                                    1800 121 9420
                                </p>
                            </div>
                            <h4 className='Snake-heading'>sandwich</h4>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='Snake-box'>
                        <div className='Snake-content'>
                            <div className='Snake-wrapper'>
                                <img className='Snake-img' src="https://demoxml.com/html/restaurant/assets/images/srv2.png" alt="Snake Icon" />
                                <div className='Snake-contact'>
                                    <p className='Snake-order'>Order Now!</p>
                                    <p className='Snake-order'>Call</p>
                                    <p className='Snake-number Snake-order'>
                                        1800 121 9420
                                    </p>
                                </div>
                                <h4 className='Snake-heading'>pizza</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='Snake-box'>
                        <div className='Snake-content'>
                            <img className='Snake-img' src="https://demoxml.com/html/restaurant/assets/images/srv3.png" alt="Snake Icon" />
                            <div className='Snake-contact'>
                                <p className='Snake-order'>Order Now!</p>
                                <p className='Snake-order'>Call</p>
                                <p className='Snake-number Snake-order'>
                                    1800 121 9420
                                </p>
                            </div>
                            <h4 className='Snake-heading'>Chers trawberry</h4>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='Snake-box'>
                        <div className='Snake-content'>
                            <img className='Snake-img' src="https://demoxml.com/html/restaurant/assets/images/srv4.png" alt="Snake Icon" />
                            <div className='Snake-contact'>
                                <p className='Snake-order'>Order Now!</p>
                                <p className='Snake-order'>Call</p>
                                <p className='Snake-number Snake-order'>
                                    1800 121 9420
                                </p>
                            </div>
                            <h4 className='Snake-heading'>taco resipie</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Service