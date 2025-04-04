import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { DataProvider } from "./assets/context/DataContext";

import "./App.css";

import Layout from "./assets/components/Layout";

import Landingpage from "./assets/pages/Landingpage/Landingpage";
import Home from "./assets/pages/Home/Home";
import Menu from "./assets/pages/Menu/Menu";

function App() {
  return (
    <DataProvider>
      {/* Wrap everything inside DataProvider */}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
