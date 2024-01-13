import React from "react";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { Routes, Route, Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Home from "./Home";
import DevelopmentSer from "./DevelopmentSer";
import MarketingSer from "./MarketingSer";
import DesigningSer from "./DesigningSer";

const BasicRouting = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">services</Link>
      <Link to="/contact">Contact</Link>

      {/* we can use <a></a> element but it refreshes the page everytime so use aboive <Link/> */}
      <a href="/">Home</a>
      <a href="/about">About</a>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        {/* if you want to display a component initially, assign index in it  */}
        <Route index element={<Home />} />

        {/* have to assign a /* for the nested routing  */}
        <Route path="/about/*" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* 2.1- nesting routing Service by using <Outlet/> nd display it in the <Services/>*/}
        <Route path="/services" element={<Services />}>
          {/* below is subrouting which needs <OutLet/> for to diplay the UI, it ewxactly shows the component on the UI  */}
          <Route path="" element={<DevelopmentSer />} />
          <Route path="marketing" element={<MarketingSer />} />
          <Route path="designing" element={<DesigningSer />} />
        </Route>

        {/* use * for showing when path didnt found  */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default BasicRouting;
