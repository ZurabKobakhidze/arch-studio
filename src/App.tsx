import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const Contact = lazy(() => import("./Pages/Contact"));

function App() {
  return (
    <Main>
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
            <Suspense>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/Portfolio"
          element={
            <Suspense>
              <Portfolio />
            </Suspense>
          }
        />
        <Route
          path="/Contact"
          element={
            <Suspense>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
    </Main>
  );
}

export default App;

const Main = styled.main`
  background: #fff;
  width: 100%;
  height: 100%;
`;
