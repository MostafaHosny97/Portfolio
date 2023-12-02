import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CompLoader } from "../components";

const Home = React.lazy(() => import("../Pages/Home/Home"));
const Projects = React.lazy(() => import("../Pages/Projects/Projects"));
const Contact = React.lazy(() => import("../Pages/Contact/Contact"));
const About = React.lazy(() => import("../Pages/About/About"));

const Router = () => {
  return (
    <Suspense fallback={<CompLoader />}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Projects" element={<Projects />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
