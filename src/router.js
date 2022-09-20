import React from "react";
import { Routes, Route } from "react-router-dom";

import Part1 from "./parts/part1";
import Part2 from "./parts/part2";
import Part3 from "./parts/part3";
import Part4 from "./parts/part4";
import AboutUs from "./parts/aboutUs";
const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<AboutUs />} />
      <Route exact path="/about_us" element={<AboutUs />} />
      <Route exact path="/part_1" element={<Part1 />} />
      <Route exact path="/part_2" element={<Part2 />} />
      <Route exact path="/part_3" element={<Part3 />} />
      <Route exact path="/part_4" element={<Part4 />} />
    </Routes>
  );
};

export default Router;
