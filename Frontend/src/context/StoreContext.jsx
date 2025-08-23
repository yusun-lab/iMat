import { createContext, useCallback, useMemo, useState } from 'react';
import { food_list } from '../assets/assets'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(
    // () => 
  {
    // try {
    //   return JSON.parse(localStorage.getItem('cart')) || {};
    // } catch { return {}; }
  });

  const addToCart = useCallback((itemID) => {
    setCartItems(prev => ({ ...prev, [itemID]: (prev[itemID] || 0) + 1 }));
  }, []);

  const removeFromCart = useCallback((itemID) => {
    setCartItems(prev => {
      const next = (prev[itemID] || 0) - 1;
      if (next <= 0) {
        const { [itemID]: _, ...rest } = prev; 
        return rest;
      }
      return { ...prev, [itemID]: next };
    });
  }, []);

  // useEffect(() => {
  //   console.log('Cart items updated:', cartItems); 
  //   localStorage.setItem('cart', JSON.stringify(cartItems));   
  // }, [cartItems]);

  const getTotalCartAmount = useCallback(() => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((food) => food.id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }, [cartItems]);

  const contextValue = useMemo(() => ({
    food_list, 
    cartItems, 
    setCartItems, 
    addToCart, 
    removeFromCart,
    getTotalCartAmount,
  }), [cartItems, addToCart, removeFromCart, getTotalCartAmount]);
  
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;