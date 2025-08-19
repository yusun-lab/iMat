import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext)

  const visibleFoods = food_list.filter(item => 
    category === 'All' || category === item.category
  );

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      
       <div className="food-display-list">
        {visibleFoods.map(item => (
          <FoodItem
            key={item.id} 
            id={item.id} 
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default FoodDisplay
