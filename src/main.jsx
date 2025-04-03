import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Container from "./components/Container/Container.jsx";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import About from "./pages/About";
import Error404 from "./pages/Error404/Error404.jsx";
import { Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="about" element={<About />} />
            <Route path="error404" element={<Error404 />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  </StrictMode>
);
