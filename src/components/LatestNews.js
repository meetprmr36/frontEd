import React from 'react'
import MidHeadSec from './MidHeadSec'
import NewsComponent from './NewsComponent'

const LatestNews = () => {
    return (
        <MidHeadSec
            heading='Our Latest News'
            Secondheading='BLOG'
        >
            <div className='News-Cards'>
                <NewsComponent
                    img='https://demoxml.com/html/restaurant/assets/images/latest-post1.jpg'
                    heading='We Are Best Quality serve Restaurant'
                    date='01'
                    month='June'
                />
                <NewsComponent
                    img='https://demoxml.com/html/restaurant/assets/images/latest-post2.jpg'
                    heading='Special grilled recipe, perfectly restaurant ready.'
                    date='11'
                    month='July'
                />
            </div>
        </MidHeadSec >
    )
}
export default LatestNews