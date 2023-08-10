import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const Contact = lazy(() => import("./Pages/Contact"));

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/About"
        element={
          <Suspense fallback={"loading..."}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/Portfolio"
        element={
          <Suspense fallback={"loading..."}>
            <Portfolio />
          </Suspense>
        }
      />
      <Route
        path="/Contact"
        element={
          <Suspense fallback={"loading..."}>
            <Contact />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Routing;
