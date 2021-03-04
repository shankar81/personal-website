import * as React from "react";
import "./App.scss";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Theme from "./components/Theme/Theme";
import Contact from "./pages/Contact/Contact";
import { GlobalContext } from "./utils/GlobalContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About/About";
import LandingPage from "./pages/Landing/LandingPage";

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
        <Router>
          <div className="scroll-mode">
            <Header onChangeTheme={toggleTheme} />
            <Switch>
              <Route component={LandingPage} exact path="/" />
              <Route component={About} exact path="/about" />
              <Route component={Contact} exact path="/contact" />
            </Switch>
            <Footer />
            {isBackdropOpen && <Backdrop />}
          </div>
        </Router>
      </Theme>
    </GlobalContext.Provider>
  );
}
