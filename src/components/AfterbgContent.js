import React from 'react'

const AfterbgContent = (props) => {
    return (
        <div>
            <div className='Afterbgcontent'>
                <h1 className='contentHeading'>{props.heading}</h1>
                <h1 className='ContentSecondheading'>{props.Secondheading}</h1>
                <div className='Line line-between'></div>
            </div>
        </div>
    )
}
export default AfterbgContent