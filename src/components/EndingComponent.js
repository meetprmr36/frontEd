import React from 'react'
import Bottom from './Bottom'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'

const EndingComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleMenu = () => {
        if (location.pathname === '/') {
            // Already on homepage, just scroll
            const element = document.getElementById('Menu-Card');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to homepage with scroll instruction
            navigate('/', { state: { scrollTo: 'Menu-Card' } });
        }
    }
    const handleEvent = () => {
        if (location.pathname === '/') {
            // Already on homepage, just scroll
            const element = document.getElementById('LatestEvent');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to homepage with scroll instruction
            navigate('/', { state: { scrollTo: 'LatestEvent' } });
        }
    }

    return (
        <div className='Footer'>
            <div className='Footer-main'>
                <div className='Footer-content'>
                    <div className='Row Space-Betwen'>
                        <div className='First-content'>
                            <h2 className='fotter-heading'>ABOUT US</h2>
                            <div className='Line'></div>
                            <p>The Love Boat soon will be making an other run. The Love Boat prompt mises some to thing for everyone. our Speed Racer. Going Speed Racer to best.</p>
                            <a className='All-Ancher' href="https://www.facebook.com/" title="Facebook" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a className='All-Ancher' href='https://x.com/' title="twitter" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className='All-Ancher' href="https://www.linkedin.com/" title="Linkedin" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a className='All-Ancher' href="https://www.pinterest.com/" title="Pinterest" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-pinterest"></i>
                            </a>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.5 }}
                                className='Second-content'>
                                <h2 className='fotter-heading'>Quick Links</h2>
                                <div className='Line'></div>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <a href="/" onClick={e => { e.preventDefault(); handleMenu(); }}>
                                            Menu
                                        </a></li>
                                    <li><Link to="/About">About</Link></li>
                                    <li>
                                        <a href="/" onClick={f => { f.preventDefault(); handleEvent(); }}>
                                            Latest Event
                                        </a></li>
                                    <li>
                                        <Link to="/Account">Account</Link>
                                    </li>
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                        <div className='THIRD-content'>
                            <h2 className='fotter-heading'>WORKING TIME</h2>
                            <div className='Line'></div>
                            <table>
                                <tbody><tr>
                                    <td>Monday - Tuesday</td>
                                    <td>------ 09.00 - 22.00</td>
                                </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>------ 08.30 - 20.30</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday - Friday</td>
                                        <td>------ 09.45 - 19.55</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>------ 10.00 - 20.45</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>------ 08.00 - 19.10</td>
                                    </tr>
                                    <tr>
                                        <td>Public Holidays</td>
                                        <td>------ Closed</td>
                                    </tr>
                                </tbody></table>
                        </div>
                        <div className='Forth-content'>
                            <h2 className='fotter-heading'>MENU CATEGORIES</h2>
                            <div className='Line'></div>
                            <ul>
                                <li>APPETIZERS</li>
                                <li>BREAKFAST</li>
                                <li>LUNCH</li>
                                <li>DINNER</li>
                                <li>MEAT & FISH</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom />
        </div >
    )
}
export default EndingComponent