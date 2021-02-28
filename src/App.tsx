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
  const [theme] = React.useState("light");
  const [isBackdropOpen, setBackdropOpen] = React.useState(false);

  // function toggleTheme() {
  //   setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  // }

  function onToggleBackdrop(value: boolean) {
    setBackdropOpen(value);
  }

  return (
    <GlobalContext.Provider value={{ isBackdropOpen, onToggleBackdrop }}>
      <Theme theme={theme}>
        <div className="scroll-mode">
          <Header />
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
