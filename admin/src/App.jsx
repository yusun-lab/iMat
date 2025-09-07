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
  const apiUrl = "http://localhost:4000";

  return (
    <div>
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add-items" element={<AddItems url={apiUrl} />} />
          <Route path="/list-items" element={<ListItems url={apiUrl} />} />
          <Route path="/orders" element={<Orders url={apiUrl} />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
