import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Dealers from "./components/Dealers/Dealers.jsx";
import DealerDetails from "./components/DealerDetails/DealerDetails.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dealers />} />
        <Route path="/dealer/:id" element={<DealerDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
