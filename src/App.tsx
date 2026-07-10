import { Route, Routes } from "react-router-dom"

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import ScrollToTop from "./components/layout/ScrollToTop"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import AmenitiesPage from "./pages/AmenitiesPage"
import MembershipPage from "./pages/MembershipPage"
import TourPage from "./pages/TourPage"
import CartPage from "./pages/CartPage"
import ContactPage from "./pages/ContactPage"
import ResourcesPage from "./pages/ResourcesPage"

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>

      <Footer />
    </>
  );
}

