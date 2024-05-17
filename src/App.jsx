import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Wishlist from "./routers/wishlist/Wishlist";
import SingleRoute from "./routers/singleRoute/SingleRoute";
import Home from "./routers/home/Home";
import "./scss/main.scss";
import PageNotFound from "./components/pageNotFound/PageNotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<SingleRoute />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
