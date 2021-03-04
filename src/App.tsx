import * as React from "react";
import "./App.scss";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Theme from "./components/Theme/Theme";
import LandingPage from "./pages/Landing/LandingPage";
import { GlobalContext } from "./utils/GlobalContext";
import About from './pages/About/About';

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
          <Header onChangeTheme={toggleTheme} />
          {/**
           * @TODO Add routing here
           * */}
          {/* <LandingPage /> */}
          <About />
          <Footer />
          {isBackdropOpen && <Backdrop />}
        </div>
      </Theme>
    </GlobalContext.Provider>
  );
}
