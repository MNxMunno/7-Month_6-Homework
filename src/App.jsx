import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Wishlist from "./routers/wishlist/Wishlist";
import Home from "./routers/home/Home";
import "./scss/main.scss";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Users from "./context/users/Users";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
