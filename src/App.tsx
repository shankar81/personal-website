import * as React from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";
import "./App.scss";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Theme from "./components/Theme/Theme";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LandingPage from "./pages/Landing/LandingPage";
import { GlobalContext } from "./utils/GlobalContext";

function App(props: RouteComponentProps) {
  const [theme, setTheme] = React.useState("light"); // light | dark
  const [isBackdropOpen, setBackdropOpen] = React.useState(false);

  React.useEffect(() => {
    const unlisten = props.history.listen(() => {
      window.scrollTo({ top: 0 });
    });

    return unlisten;
  }, [props.history]);

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
          <Switch>
            <Route component={LandingPage} exact path="/" />
            <Route component={About} exact path="/about" />
            <Route component={Contact} exact path="/contact" />
          </Switch>
          <Footer />
          {isBackdropOpen && <Backdrop />}
        </div>
      </Theme>
    </GlobalContext.Provider>
  );
}

export default withRouter(App);
