import * as React from "react";
import LandingPage from "./pages/Landing/LandingPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Theme from "./components/Theme/Theme";

export default function App() {
  const [theme] = React.useState("light");

  // function toggleTheme() {
  //   setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  // }

  return (
    <Theme theme={theme}>
      <Header />
      <LandingPage />
      <Footer />
    </Theme>
  );
}
