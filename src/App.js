import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// compoenents
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Item from "./components/Item";
import Actor from "./components/ActorPage";
import NotFound from "./components/NotFound";
import ScrollToTop from "./static/ScrollToTop";

// styles
import { GlobalStyle } from "./GlobalStyle";

import { useGlobalContext } from "./context";

const App = () => {
  const { category } = useGlobalContext();
  return (
    <Router>
      <ScrollToTop showBelow={250} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${category}/:id`} element={<Item />} />
        <Route path="/actor/:id" element={<Actor />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default App;
