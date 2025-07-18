import React from 'react'
import MiddleHeading from './MiddleHeading'

const BgpicCompo = (props) => {
    return (
        <div className='bgpic' style={{ backgroundImage: `url(${props.img})` }}>
            <div className='overlay'></div>
            <MiddleHeading
                heading={props.heading}
                Secondheading={props.Secondheading}
                Chefimg={props.Chefimg}
            />
            {props.children}
        </div>
    )
}
export default BgpicCompo