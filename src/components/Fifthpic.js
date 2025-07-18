import React, { useRef, useEffect, useState } from 'react';
import BgpicCompo from './BgpicCompo'
import CountUp from 'react-countup';

const Fifthpic = () => {
    const sectionRef = useRef(null);
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return; // ⛑️ safe check
            const rect = sectionRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                setStartCount(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='Thirdpic'>
            <BgpicCompo
                img="https://demoxml.com/html/restaurant/assets/images/surprise-sec-bg.jpg"
                heading="Counters"
                Secondheading="We Are Delicious Restaurant"
                Chefimg="https://demoxml.com/html/restaurant/assets/images/counter-ic3.png"
            >
                <div className='Fifth-content'>
                    <div className='Row' ref={sectionRef}>
                        <div className='box'>
                            <div className='Snake-box'>
                                <div className='Snake-content'>
                                    <img className='Snake-img Fifth-img' src="https://demoxml.com/html/restaurant/assets/images/counter-ic1.png" alt="Chicken" />
                                    <h4 className='Snake-heading fifth-order'>{startCount ? <CountUp end={4372} duration={3} /> : 0}</h4>
                                    <p className='Fifth-para'>CHICKEN SERVED</p>
                                </div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='Snake-box'>
                                <div className='Snake-content'>
                                    <img className='Snake-img Fifth-img' src="https://demoxml.com/html/restaurant/assets/images/counter-ic2.png" alt="Chicken" />
                                    <h4 className='Snake-heading fifth-order'>{startCount ? <CountUp end={3795} duration={3} /> : 0}</h4>
                                    <p className='Fifth-para'>FISH FRIED</p>
                                </div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='Snake-box'>
                                <div className='Snake-content'>
                                    <img className='Snake-img Fifth-img' src="https://demoxml.com/html/restaurant/assets/images/counter-ic3.png" alt="Chicken" />
                                    <h4 className='Snake-heading fifth-order'>{startCount ? <CountUp end={394} duration={3} /> : 0}</h4>
                                    <p className='Fifth-para'>OUR CHEFS SPECIAL</p>
                                </div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='Snake-box'>
                                <div className='Snake-content'>
                                    <img className='Snake-img Fifth-img' src="https://demoxml.com/html/restaurant/assets/images/counter-ic4.png" alt="Chicken" />
                                    <h4 className='Snake-heading fifth-order'>{startCount ? <CountUp end={1678} duration={3} /> : 0}    </h4>
                                    <p className='Fifth-para'>OUR CHEFS SPECIAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BgpicCompo>
        </div>
    )
}
export default Fifthpic