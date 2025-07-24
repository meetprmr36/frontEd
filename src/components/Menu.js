import React from 'react'
import MenuComponent from './MenuComponent'

const Menu = () => {
    return (
        <div id='Menu-Card' className='Menu'>
            <div className='Menu-content'>
                <span className='Top-img'>
                    <img className=' Menu-img' src="https://demoxml.com/html/restaurant/assets/images/menu-card1.png" alt="Menu Card" />
                </span>
                <span className='Bottom-img'>
                    <img className=' Menu-img' src="https://demoxml.com/html/restaurant/assets/images/menu-card2.png" alt="Menu Card" />
                </span>
                <div className='Menu-Container'>
                    <h1 className='Menu-Heading'>This Week Special</h1>
                    <h1 className='Menu-secondheading'>Menu card</h1>
                    <div className='Line line-between '></div>

                    <MenuComponent
                        img="https://demoxml.com/html/restaurant/assets/images/menu1.jpg"
                        Dishname='PORK SHRIMP MULTIGRAIN'
                        DishDescription='Vegitables,cheese,Mushroom,Grill Items'
                        DishPrice='$55'
                        img2="https://demoxml.com/html/restaurant/assets/images/menu2.jpg"
                        DishName2='CHICKEN BBQ DELIGHT'
                    />
                    <MenuComponent
                        img="https://demoxml.com/html/restaurant/assets/images/menu3.jpg"
                        Dishname='VEGITABLE TOMAT MIXERFROOT'
                        DishDescription='Vegitables,cheese,Mushroom,Grill Items'
                        DishPrice='$69'
                        img2="https://demoxml.com/html/restaurant/assets/images/menu4.jpg"
                        DishName2='VEGITABLE TOMAT MIXERFROOTT'
                    />
                    <MenuComponent
                        img="https://demoxml.com/html/restaurant/assets/images/menu5.jpg"
                        Dishname='TACO RESIPIE WITH OF SLIZER'
                        DishDescription='Vegitables,cheese,Mushroom,Grill Items'
                        DishPrice='$43'
                        img2="https://demoxml.com/html/restaurant/assets/images/menu6.jpg"
                        DishName2='TACO RESIPIE WITH OF SLIZER'
                    />

                    <MenuComponent
                        img="https://demoxml.com/html/restaurant/assets/images/menu7.jpg"
                        Dishname='strawberry bimixed fruite'
                        DishDescription='Vegitables,cheese,Mushroom,Grill Items'
                        DishPrice='$39'
                        img2="https://demoxml.com/html/restaurant/assets/images/menu7.jpg"
                        DishName2='strawberry bimixed fruite'
                    />

                    <MenuComponent
                        img="https://demoxml.com/html/restaurant/assets/images/menu9.jpg"
                        Dishname='EGG VEGITABLE FRUITE SALENTE'
                        DishDescription='Egg,cheese,Mushroom,Vegitables'
                        DishPrice='$27'
                        img2="https://demoxml.com/html/restaurant/assets/images/menu10.jpg"
                        DishName2='EGG VEGITABLE FRUITE SALENTE'
                    />
                </div>
            </div>

        </div>
    )
}
export default Menu