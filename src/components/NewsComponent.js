import React from 'react'

const NewsComponent = (props) => {
    return (
        <div className='News-Post'>
            <div className='News-img'>
                <img src={props.img} alt='Blog'></img>
            </div>
            <div className='News-Content'>
                <div className='Date'>
                    <div className='Post-Date'>{props.date} <span>{props.month}</span> </div>
                </div>
                <div className='News-discription'>
                    <h2 className='Post-Heading'>{props.heading}
                    </h2>
                    <div className='Loaction'>
                        <span><i className="fa fa-map-marker"></i>
                            121th Street, Sidney VIC 3000</span>
                    </div>
                    <p>The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. All of them had hair of gold like their mother the youngest one in curls. Come and play.......</p>
                    <a href='/about'>Read More</a>
                </div>
            </div>
        </div>
    )
}
export default NewsComponent