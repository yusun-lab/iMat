import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import AddItems from "./pages/AddItems/AddItems";
import ListItems from "./pages/ListItems/ListItems";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add-items" element={<AddItems />} />
          <Route path="/list-items" element={<ListItems />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
