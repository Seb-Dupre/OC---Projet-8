import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes.jsx";
import Container from "./components/Container/Container.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Container>
        <Header />
        <AppRouter />
      </Container>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
