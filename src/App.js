import { Fragment } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
