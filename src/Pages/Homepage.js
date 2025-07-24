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

    function smoothScrollTo(element, duration = 1800, offset = 0) {
        const targetY = element.getBoundingClientRect().top + window.pageYOffset + offset;
        const startY = window.pageYOffset;
        const distance = targetY - startY;
        let startTime = null;

        function easeInOutCubic(t) {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, startY + distance * easeInOutCubic(progress));
            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            setTimeout(() => {
                const element = document.getElementById(location.state.scrollTo);
                if (element) {
                    smoothScrollTo(element, 1200); // 1200ms for slow scroll
                }
            }, 600); // delay before starting scroll
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
export default Homepage 