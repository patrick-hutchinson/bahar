import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div id="content">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
