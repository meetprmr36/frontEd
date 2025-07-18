import React from 'react'

const MidHeadSec = (props) => {
    return (
        <div>
            <div className='Afterbgpic'>
                <h1 className='bgheadingSec'>{props.heading}</h1>
                <h1 className='bgSecondheadingSec'>{props.Secondheading}</h1>
                <h1 className='bgSecondheadingSec white'>{props.secondheadingWhite}</h1>
                <div className='Line line-between'>
                </div>
                {props.children}
            </div>
        </div>
    )
}
export default MidHeadSec