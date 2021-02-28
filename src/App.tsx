import * as React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Theme from "./components/Theme/Theme";
import LandingPage from "./pages/Landing/LandingPage";

export default function App() {
  const [theme] = React.useState("light");

  // function toggleTheme() {
  //   setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  // }

  return (
    <Theme theme={theme}>
      <>
        <Header />
        <LandingPage />
        <Footer />
      </>
    </Theme>
  );
}
