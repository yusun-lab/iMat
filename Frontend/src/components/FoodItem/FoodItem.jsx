import React, { useState } from 'react'
import './FoodItem.css' 
import { assets } from '../../assets/assets'
import { PlusIcon } from '../../assets/assets'
import { MinusIcon } from '../../assets/assets'


const FoodItem = ({id, name, price, description, image}) => {

  const [itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item'>
      <div className='food-item-image-container'>
        <img src={image} alt={name} className='food-item-image' />
        {!itemCount
          ? <PlusIcon 
              onClick={() => setItemCount(prev => prev+1)} 
              className='black-plus-icon'
            />
          : <div className='food-item-counter'>
              <MinusIcon 
                onClick={() => setItemCount(prev => prev-1)} 
              />
              <p>{itemCount}</p>
              <PlusIcon 
                onClick={() => setItemCount(prev => prev+1)} 
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
