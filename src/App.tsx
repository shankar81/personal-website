import * as React from "react";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Theme from "./components/Theme/Theme";
import LandingPage from "./pages/Landing/LandingPage";
import { GlobalContext } from "./utils/GlobalContext";
import About from "./pages/About/About";
import "./App.scss";

export default function App() {
  const [theme, setTheme] = React.useState("light"); // light | dark
  const [isBackdropOpen, setBackdropOpen] = React.useState(false);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  function onToggleBackdrop(value: boolean) {
    setBackdropOpen(value);
  }

  return (
    <GlobalContext.Provider value={{ isBackdropOpen, onToggleBackdrop }}>
      <Theme theme={theme}>
        <div className="scroll-mode">
          <button style={{ zIndex: 50, margin: 50 }} onClick={toggleTheme}>
            Change Theme
          </button>
          <Header />
          {/**
           * @TODO Add routing here
           * */}
          <LandingPage />
          {/* <About /> */}
          <Footer />
          {isBackdropOpen && <Backdrop />}
        </div>
      </Theme>
    </GlobalContext.Provider>
  );
}
