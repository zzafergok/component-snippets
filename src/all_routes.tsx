import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Components from "./pages/components";
import Documents from "./pages/documents";
import Contact from "./pages/contact";
import Index from "./layout/index";

type Props = {};

function AllRoutes({}: Props) {
  return (
    <>
      <Index>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="components" element={<Components />} />
          <Route path="documents" element={<Documents />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Index>
    </>
  );
}

export default AllRoutes;
