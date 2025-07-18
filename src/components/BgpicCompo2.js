import React from 'react'
import MidHeadSec from './MidHeadSec'

const Bgpicompo2 = (props) => {
    return (
        <div className='bgpic' style={{ backgroundImage: `url(${props.img})` }}>
            <div className='overlay'></div>
            <MidHeadSec
                heading={props.heading}
                Secondheading={props.Secondheading}
                secondheadingWhite={props.secondheadingWhite}
            />
            {props.children}
        </div>
    )
}
export default Bgpicompo2