import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { loadExternalScripts } from "./utils/loadScripts"; // Adjust path if needed
import './i18n';

import Main from "./pages/Main";

import BlockA from "./pages/blockInfo/BlockA";
import BlockB from "./pages/blockInfo/BlockB";
import BlockC from "./pages/blockInfo/BlockC";

import PlanA from "./pages/planInfo/PlanA";
import PlanB from "./pages/planInfo/PlanB";
import PlanC from "./pages/planInfo/PlanC";

import Apartment from "./pages/flatInfo/Apartment";

import Gallery from "./pages/gallery/Gallery";

import Layout from "./pages/Layout";
import Footer from "./pages/Footer";

const App = () => {
  useEffect(() => {
    loadExternalScripts();
  }, []);

  return (
    <Router>
      <Layout />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/blocka" element={<BlockA />} />
        <Route path="/blockb" element={<BlockB />} />
        <Route path="/blockc" element={<BlockC />} />

        <Route path="/plana" element={<PlanA />} />
        <Route path="/planb" element={<PlanB />} />
        <Route path="/planc" element={<PlanC />} />

        <Route path="/apartment/:apartmentNumber" element={<Apartment />} />

        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
