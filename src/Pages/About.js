import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import VerticalVideoSlider from '../components/vdoComponent'

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/', { state: { scrollTo: 'book-table' } });
  };
  return (
    <div className="about-page">

      <div className="about-hero">
        <div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Welcome to SpiceHaus</h1>
          <p>Where flavors meet emotions</p>
          <div className='line-between Line'></div>
        </div>
      </div>

      <VerticalVideoSlider />

      <section className="about-section section-padding">
        <motion.div
          className="about-content"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='About-Hea'>Our Story</h2>
          <p className='About-par'>
            Founded in 2020, SpiceHaus emerged from a deep passion for food, culture, and bringing people together. What began as a small kitchen dream quickly grew into a flavorful journey that continues to evolve with every dish we serve.
          </p>
          <p className='About-par'>
            Our chefs carefully blend age-old spices with modern cooking techniques to create food that’s comforting, exciting, and unforgettable.
          </p>
          <p className='About-par'>
            More than just a restaurant, SpiceHaus is an experience — a place where stories are shared over meals, where traditions are honored, and where every guest feels like family.
          </p>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
          alt="Our Kitchen"
          className="about-img"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>


      <section className="about-section reverse section-padding">
        <motion.div
          className="about-content"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='About-Hea'>Our Mission</h2>
          <p className='About-par'>
            At SpiceHaus, our mission is to go beyond just serving food — we aim to spark joy, ignite senses, and create lasting memories.
          </p>
          <p className='About-par'>
            We’re here to deliver an immersive dining experience that blends bold flavors, artistic presentation, and warm hospitality. Our goal is to be the place you think of when you crave something real, something flavorful, and something that feels like home.
          </p>
          <p className='About-par'>
            Sourcing the freshest local ingredients, using sustainable practices, and innovating with every season — that’s how we ensure quality on every plate.
          </p>
        </motion.div>
        <img
          src="restaurant.jpg"
          alt="Our Team"
          className="about-img"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>


      <section className="services-section section-padding fade-in">
        <div className="services-container">
          <h2>What We Offer</h2>
          <ul className="services-list">
            <li>
              <span className="emoji">🍽️</span>
              <span className="text">Dine-in Experience</span>
              <p>Immerse yourself in a luxurious dining ambiance with handcrafted dishes, curated by top chefs.</p>
            </li>
            <li>
              <span className="emoji">🚚</span>
              <span className="text">Fast Delivery</span>
              <p>Enjoy restaurant-quality meals at home. Fast, hot, and sealed for freshness and safety.</p>
            </li>
            <li>
              <span className="emoji">👨‍🍳</span>
              <span className="text">Private Catering</span>
              <p>From weddings to private dinners, our custom catering service brings flavor to every occasion.</p>
            </li>
            <li>
              <span className="emoji">🎉</span>
              <span className="text">Party & Event Hosting</span>
              <p>Book our private space for birthdays, corporate events, and celebrations with full service.</p>
            </li>
          </ul>
        </div>
      </section>



      <section className="gallery section-padding zoom-in">
        <h2>Inside the Kitchen</h2>
        <div className="image-grid">
          <img src="restaurant2.jpg" alt="Dining" />
          <img src="Inkitchen.jpg" alt="Dining" />
          <img src="restaurant3.jpg" alt="Dining" />
        </div>
      </section>


      <section className="testimonials section-padding fade-in">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="card">
            <p>"Absolutely the best meal I’ve had in a long time. 10/10!"</p>
            <h4>- Riya Mehta</h4>
          </div>
          <div className="card">
            <p>"The staff was warm and welcoming. Felt like home!"</p>
            <h4>- Ankit Shah</h4>
          </div>
          <div className="card">
            <p>"Incredible flavors. Bursting with taste and perfectly balanced. Highly recommended!"</p>
            <h4>- Priya Desai</h4>
          </div>
        </div>
      </section>


      <section className="cta-section section-padding bounce-in">
        <h2>Ready to Taste Something Amazing?</h2>
        <button onClick={handleClick} className="cta-button">Book a Table</button>
      </section>
    </div>

  )
}
export default About