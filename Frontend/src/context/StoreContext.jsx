import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(
    // () =>
    {
      // try {
      //   return JSON.parse(localStorage.getItem('cart')) || {};
      // } catch { return {}; }
    }
  );

  const url = "http://localhost:4000";

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const [foodList, setFoodList] = useState([]);

  const addToCart = useCallback((itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: (prev[itemID] || 0) + 1 }));
  }, []);

  const removeFromCart = useCallback((itemID) => {
    setCartItems((prev) => {
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
        let itemInfo = foodList.find((food) => food._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }, [cartItems, foodList]);

  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates if component is unmounted

    const fetchFoodList = async () => {
      try {
        // Fetch the food list from the backend API
        const response = await axios.get(`${url}/api/food/list`);
        if (isMounted) {
          // Update state only if component is still mounted
          setFoodList(response.data.data || []);
        }
      } catch (error) {
        console.error("Failed to fetch food list:", error);
      }
    };

    fetchFoodList();

    // Cleanup function runs when component unmounts
    return () => {
      isMounted = false;
    };
  }, [url]);

  const contextValue = useMemo(
    () => ({
      foodList,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
      getTotalCartAmount,
      url,
      token,
      setToken,
    }),
    [cartItems, addToCart, removeFromCart, getTotalCartAmount, token, foodList]
  );

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
