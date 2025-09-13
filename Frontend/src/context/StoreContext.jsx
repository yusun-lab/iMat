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

  const url = import.meta.env.VITE_API_URL;
  // const url = "http://localhost:4000";
  // const url = "https://imat-backend.onrender.com";

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const [foodList, setFoodList] = useState([]);

  const addToCart = useCallback(
    async (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));

      if (token) {
        axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
      }
    },
    [token]
  );

  const deleteFromCart = useCallback(
    async (itemId) => {
      setCartItems((prev) => {
        const next = (prev[itemId] || 0) - 1;
        if (next <= 0) {
          const { [itemId]: _, ...rest } = prev;
          return rest;
        }

        return { ...prev, [itemId]: next };
      });

      if (token) {
        try {
          await axios.post(
            url + "/api/cart/delete",
            { itemId },
            { headers: { token } }
          );
        } catch (error) {
          console.error("Delete from cart failed:", error);
        }
      }
    },
    [token]
  );

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

    const loadCartData = async (token) => {
      try {
        const response = await axios.get(url + "/api/cart/get", {
          headers: { token },
        });
        setCartItems(response.data.cartData || {});
      } catch (error) {
        console.error("Failed to load cart data", error);
      }
    };

    fetchFoodList();

    loadCartData(localStorage.getItem("token"));

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
      deleteFromCart,
      getTotalCartAmount,
      url,
      token,
      setToken,
    }),
    [cartItems, addToCart, deleteFromCart, getTotalCartAmount, token, foodList]
  );

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
