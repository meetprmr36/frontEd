import React from 'react'
import BgpicCompo2 from './BgpicCompo2'

const Reservation = () => {
    return (
        <div>
            <section id="book-table">
                <BgpicCompo2
                    img="https://demoxml.com/html/restaurant/assets/images/book-table-bg.jpg"
                    heading="Book Your Table"
                    secondheadingWhite='MAKE A RESERVATION'
                >
                    <form>
                        <div className='Row content-center'>
                            <div className='FirstInput first-row'>
                                <input
                                    name="name"
                                    className='input-area'
                                    type='text'
                                    placeholder='Name *'
                                    autoComplete="name"
                                />
                                <input
                                    name="phone"
                                    className='input-area'
                                    type='tel'
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    placeholder='Phone Number *'
                                    autoComplete="tel"
                                />
                            </div>
                        </div>

                        <div className='Row content-center'>
                            <div className='FirstInput first-row'>
                                <input
                                    name="guests"
                                    className='input-area'
                                    type='number'
                                    placeholder='Tables for how much people *'
                                    autoComplete="off"
                                    min="1"
                                    max="15"
                                />
                                <input
                                    name="date"
                                    className='input-area'
                                    type='date'
                                    placeholder='Date *'
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        <div className='Row Reserve-button'>
                            <button className='nobox' href="#" type='submit'>Reserve</button>
                        </div>
                    </form>
                </BgpicCompo2>
            </section>
        </div>
    )
}
export default Reservation