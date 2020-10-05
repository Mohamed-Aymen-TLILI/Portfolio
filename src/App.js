import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Shop from "./pages/Shop/Shop";
import CV from "./components/Cv/Cv";
import MovieFilm from "./components/Film/moviefilm";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/cv" component={CV} />
        <Route path="/film" component={MovieFilm} />
        <Route path="/contact" component={Contact} />
        <Route path="/exemple" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;
