import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ScrollToTopNav from "./component/ScrollToTopNav";
import Shop from "./Pages/shop/Shop";
import ProductDetail from "./Pages/ProductDetails/ProductDetail";
import Service from "./Pages/service/Service";
import Faq from "./Pages/FAQ/Faq";
import About from "./Pages/about/About";
import Mgtp from "./Pages/mgtp/Mgtp";
import Payment from "./Pages/payment/Payment";
import Event from "./Pages/event/Event";
  
AOS.init();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop className="scroll_up" smooth={true} />
      <ScrollToTopNav/>

      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="shop" element={<Shop/>}></Route>
        <Route path="payment" element={<Payment/>}></Route>
        <Route path="mgtp" element={<Mgtp/>}></Route>
        <Route path="event" element={<Event/>}></Route>
        <Route path="faq" element={<Faq/>}></Route>
        <Route path="details/:id" element={<ProductDetail/>}></Route>
        <Route path="service" element={<Service/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
