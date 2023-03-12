import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Telkom from './Pages/telkom.jsx'
import Tamtech from './Pages/tamtech.jsx'
// import Login from './Pages/Login/Login'
// import { GetAllProduct } from "./Redux/Actions/ProductActions";
import { Routes, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import Impact from "./Pages/Impact/Impact";
function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchingAllProduct();
  // }, []);
  // const fetchingAllProduct = () => {
  //   dispatch(GetAllProduct());
  // };

  return (
    <Routes className="routing-container">
      <Route exact path="/" element={<Home new_params={"testing"} />} />
      <Route exact path="/impact" element={<Impact new_params={"testing"} />} />
      <Route exact path="/telkom" element={<Telkom new_params={"testing"} />} />
      <Route exact path="/tamtech" element={<Tamtech new_params={"testing"} />} />
      {/* <Route exact path="/home" element={<Home new_params={"testing"} />} /> */}
    </Routes>
  );
}

export default App;
