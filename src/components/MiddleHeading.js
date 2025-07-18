import React from 'react'

const MiddleHeading = (props) => {
    return (
        <div>
            <div className='Afterbgpic'>
                <h1 className='bgheading'>{props.heading}</h1>
                <h1 className='bgSecondheading'>{props.Secondheading}</h1>
                <div className='Line line-between'>
                </div>
                <img src={props.Chefimg} alt="Surprise"></img>
            </div>
        </div>
    )
}
export default MiddleHeading