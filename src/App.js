import { Fragment } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/default.css";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
