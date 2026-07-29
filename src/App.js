import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/Landing/LandingPage";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import AdminDashboardLayout from "./components/AdminDashboard/AdminDashboardLayout";
import ScrollToHash from "./components/Landing/ScrollToHash";

// Public pages
import FamilyTree from "./components/Pages/FamilyTree";
import Gallery from "./components/Pages/Gallery";
import AboutUs from "./components/Landing/AboutUs";
import Getintouch from "./components/Landing/Getintouch";
import UserLogin from "./components/Pages/UserLogin";
import Services from "./components/Services/Services";
import PublicLayout from "./components/PublicLayout/PublicLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/familytree" element={<FamilyTree />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/getintouch" element={<Getintouch />} />
        </Route>

        <Route path="/login" element={<UserLogin />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        <Route path="/admindashboard/*" element={<AdminDashboardLayout />} />
      </Routes>

      <ScrollToHash />
    </div>
  );
}

export default App;
