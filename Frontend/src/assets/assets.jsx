import logo from "./icons/logo.svg";
import search_icon from "./icons/search.svg";
import cart_icon from "./icons/cart.svg";
import rating_starts from "./rating_starts.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import cross_icon from "./icons/close-circle-outline.svg";

import menu_1 from "./menuList/menu_1.png";
import menu_2 from "./menuList/menu_2.png";
import menu_3 from "./menuList/menu_3.png";
import menu_4 from "./menuList/menu_4.png";
import menu_5 from "./menuList/menu_5.png";
import menu_6 from "./menuList/menu_6.png";
import menu_7 from "./menuList/menu_7.png";
import menu_8 from "./menuList/menu_8.png";

import food_1 from "./foodList/food_1.png";
import food_2 from "./foodList/food_2.png";
import food_3 from "./foodList/food_3.png";
import food_4 from "./foodList/food_4.png";
import food_5 from "./foodList/food_5.png";
import food_6 from "./foodList/food_6.png";
import food_7 from "./foodList/food_7.png";
import food_8 from "./foodList/food_8.png";
import food_9 from "./foodList/food_9.png";
import food_10 from "./foodList/food_10.png";
import food_11 from "./foodList/food_11.png";
import food_12 from "./foodList/food_12.png";
import food_13 from "./foodList/food_13.png";
import food_14 from "./foodList/food_14.png";
import food_15 from "./foodList/food_15.png";
import food_16 from "./foodList/food_16.png";
import food_17 from "./foodList/food_17.png";
import food_18 from "./foodList/food_18.png";
import food_19 from "./foodList/food_19.png";
import food_20 from "./foodList/food_20.png";
import food_21 from "./foodList/food_21.png";
import food_22 from "./foodList/food_22.png";
import food_23 from "./foodList/food_23.png";
import food_24 from "./foodList/food_24.png";
import food_25 from "./foodList/food_25.png";
import food_26 from "./foodList/food_26.png";
import food_27 from "./foodList/food_27.png";
import food_28 from "./foodList/food_28.png";
import food_29 from "./foodList/food_29.png";
import food_30 from "./foodList/food_30.png";
import food_31 from "./foodList/food_31.png";
import food_32 from "./foodList/food_32.png";

// ——————————————————————————————————————————

export const assets = {
  logo,
  search_icon,
  cart_icon,
  rating_starts,
  app_store,
  play_store,
  cross_icon,
};

export function PlusIcon({
  color = "var(--main-orange)",
  size = 24,
  ...props
}) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <path
        d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
        fill={color}
      />
    </svg>
  );
}

export function MinusIcon({ color = "red", size = 24, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <path
        d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"
        fill={color}
      />
    </svg>
  );
}

export function TwitterIcon({ color = "#1DA1F2", size = 40, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <path
        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
        fill={color}
      />
    </svg>
  );
}

export function YoutubeIcon({ color = "#FF0000", size = 40, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <path
        d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
        fill={color}
      />
    </svg>
  );
}

export function InstagramIcon({ color = "#E1306C", size = 40, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <path
        d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
        fill={color}
      />
    </svg>
  );
}

export function FacebookIcon({ color = "#1877F2", size = 40, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <path
        d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
        fill={color}
      />
    </svg>
  );
}

export const menu_list = [
  {
    menu_name: "Salad",
    menu_image: menu_1,
  },
  {
    menu_name: "Rolls",
    menu_image: menu_2,
  },
  {
    menu_name: "Deserts",
    menu_image: menu_3,
  },
  {
    menu_name: "Sandwich",
    menu_image: menu_4,
  },
  {
    menu_name: "Cake",
    menu_image: menu_5,
  },
  {
    menu_name: "Pure Veg",
    menu_image: menu_6,
  },
  {
    menu_name: "Pasta",
    menu_image: menu_7,
  },
  {
    menu_name: "Noodles",
    menu_image: menu_8,
  },
];

export const food_list = [
  {
    id: "1",
    name: "Greek salad",
    image: food_1,
    price: 80,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "2",
    name: "Veg salad",
    image: food_2,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "3",
    name: "Clover Salad",
    image: food_3,
    price: 70,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "4",
    name: "Chicken Salad",
    image: food_4,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Salad",
  },
  {
    id: "5",
    name: "Lasagna Rolls",
    image: food_5,
    price: 80,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "6",
    name: "Peri Peri Rolls",
    image: food_6,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "7",
    name: "Chicken Rolls",
    image: food_7,
    price: 90,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "8",
    name: "Veg Rolls",
    image: food_8,
    price: 90,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Rolls",
  },
  {
    id: "9",
    name: "Ripple Ice Cream",
    image: food_9,
    price: 70,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    id: "10",
    name: "Fruit Ice Cream",
    image: food_10,
    price: 90,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    id: "11",
    name: "Jar Ice Cream",
    image: food_11,
    price: 80,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    id: "12",
    name: "Vanilla Ice Cream",
    image: food_12,
    price: 80,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Deserts",
  },
  {
    id: "13",
    name: "Chicken Sandwich",
    image: food_13,
    price: 90,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "14",
    name: "Vegan Sandwich",
    image: food_14,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "15",
    name: "Grilled Sandwich",
    image: food_15,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "16",
    name: "Bread Sandwich",
    image: food_16,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Sandwich",
  },
  {
    id: "17",
    name: "Cup Cake",
    image: food_17,
    price: 70,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "18",
    name: "Vegan Cake",
    image: food_18,
    price: 90,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "19",
    name: "Butterscotch Cake",
    image: food_19,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "20",
    name: "Sliced Cake",
    image: food_20,
    price: 80,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Cake",
  },
  {
    id: "21",
    name: "Garlic Mushroom ",
    image: food_21,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
  },
  {
    id: "22",
    name: "Fried Cauliflower",
    image: food_22,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
  },
  {
    id: "23",
    name: "Mix Veg Pulao",
    image: food_23,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
  },
  {
    id: "24",
    name: "Rice Zucchini",
    image: food_24,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pure Veg",
  },
  {
    id: "25",
    name: "Cheese Pasta",
    image: food_25,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
  },
  {
    id: "26",
    name: "Tomato Pasta",
    image: food_26,
    price: 90,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
  },
  {
    id: "27",
    name: "Creamy Pasta",
    image: food_27,
    price: 90,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
  },
  {
    id: "28",
    name: "Chicken Pasta",
    image: food_28,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Pasta",
  },
  {
    id: "29",
    name: "Buttter Noodles",
    image: food_29,
    price: 100,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
  {
    id: "30",
    name: "Veg Noodles",
    image: food_30,
    price: 110,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
  {
    id: "31",
    name: "Somen Noodles",
    image: food_31,
    price: 110,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
  {
    id: "32",
    name: "Cooked Noodles",
    image: food_32,
    price: 110,
    description:
      "Food provides essential nutrients for overall health and well-being",
    category: "Noodles",
  },
];
