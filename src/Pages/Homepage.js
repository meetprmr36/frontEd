import React from 'react'
import Thefullimage from '../components/Thefullimage'
import AboutSection from '../components/AboutSection'
import Thirdpic from '../components/Thirdpic'
import Service from '../components/Service'
import Fifthpic from '../components/Fifthpic'
import Menu from '../components/Menu'
import Reservation from '../components/Reservation'
import LatestEvent from '../components/LatestEvent'
import CustomerReview from '../components/CustomerReview'
import LatestNews from '../components/LatestNews'
import NewsLater from '../components/NewsLater'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Homepage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const target = document.getElementById(location.state.scrollTo);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });
                }, 500);
            }
        }
    }, [location]);

    return (
        <div className='Homepage'>
            <Thefullimage img="https://demoxml.com/html/restaurant/assets/images/slide1.jpg" />
            <AboutSection />
            <Thirdpic />
            <Service />
            <Fifthpic />
            <Menu />
            <section id="book-table">
                <Reservation />
            </section>
            <LatestEvent />
            <CustomerReview />
            <LatestNews />
            <NewsLater />
        </div>
    )
}
export { Homepage }