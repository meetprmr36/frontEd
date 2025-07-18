import React from 'react'

const MenuComponent = (props) => {
    return (
        <div className='Menu-items-row'>
            <div className='Menu-item'>
                <div className='Item-img'>
                    <img src={props.img} alt="Menu Item" />
                </div>
                <div className='Item-text'>
                    <h1 className='DishName'>{props.Dishname}</h1>
                    <span className='DishDescription'>{props.DishDescription}</span>
                </div>
                <div className='Item-price'>
                    <div className='line-between  Margin-zero Line-Width'>---------</div>
                    <span className='DishPrice'>{props.DishPrice}</span>
                </div>
            </div>


            <div className='Menu-item'>
                <div className='Item-img'>
                    <img src={props.img2} alt="Menu Item" />
                </div>
                <div className='Item-text'>
                    <h1 className='DishName'>{props.DishName2}</h1>
                    <span className='DishDescription'>{props.DishDescription}</span>
                </div>
                <div className='Item-price'>
                    <div className='line-between  Margin-zero Line-Width'>---------</div>
                    <span className='DishPrice'>{props.DishPrice}</span>
                </div>
            </div>
        </div>
    )
}
export default MenuComponent