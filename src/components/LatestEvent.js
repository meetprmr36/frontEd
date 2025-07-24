import React from 'react'
import MidHeadSec from './MidHeadSec'
import EventCards from './EventCards'

const LatestEvent = () => {
    return (
        <div id='LatestEvent'>
            <MidHeadSec
                heading='Latest Events'
                Secondheading='DO NOT MISS'
            >
                <div className='Row Center'>
                    <EventCards
                        img='https://demoxml.com/html/restaurant/assets/images/event1.jpg'
                        heading='Daily Special Foods Specifically For Your Health'
                        para='Michael Knight a young loner on a crusade to champion the cause of the innocent.'
                    />
                    <EventCards
                        img='https://demoxml.com/html/restaurant/assets/images/event2.jpg'
                        heading='The Spiecialy Chicken Fry With RiceFood'
                        para='Michael Knight a young loner on a crusade to champion the cause of the innocent.'
                    />
                    <EventCards
                        img='https://demoxml.com/html/restaurant/assets/images/event3.jpg'
                        heading='Drinks With GarnishFried Tomato Chosey'
                        para='Michael Knight a young loner on a crusade to champion the cause of the innocent.'
                    />
                </div>
            </MidHeadSec>
        </div>
    )
}
export default LatestEvent