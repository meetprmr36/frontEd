import React from 'react'

const EventCards = (props) => {
    return (
        <div className='Event-cards'>
            <div className='Event-item'>
                <img src={props.img} alt='img'></img>
                <div className='Event-content'>
                    <h4>{props.heading}</h4>
                    <div className='Line line-between Event-line'></div>
                    <p className='Event-para'>{props.para}</p>
                    <span className='Time-span'>
                        <i className='fa fa-clock-o'></i>&nbsp;
                        Posted Dec 20,2016 10:23 am
                    </span>
                    <a className='Event-button' href='#' title='Book Now'>Book Now</a>
                </div>
            </div>
        </div>
    )
}
export default EventCards