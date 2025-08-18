import React, { useContext } from 'react'
import './FoodItem.css' 
import { assets } from '../../assets/assets'
import { PlusIcon } from '../../assets/assets'
import { MinusIcon } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({id, name, price, description, image}) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-image-container'>
        <img src={image} alt={name} className='food-item-image' />
        {!cartItems[id] 
          ? <PlusIcon 
              onClick={() => addToCart(id)} 
              className='black-plus-icon'
            />
          : <div className='food-item-counter'>
              <MinusIcon 
                onClick={() => removeFromCart(id)} 
              />
              <p>{cartItems[id]}</p>
              <PlusIcon 
                onClick={() => addToCart(id)} 
                color="green"
                className='green-plus-icon'
              />
            </div>
        }
      </div>

      <div className="food-item-info">
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>SEK {price}</p>
      </div>
    </div>
  )
}

export default FoodItem
