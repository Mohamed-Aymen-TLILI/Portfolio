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
        <Route path="/Portfolio" exact component={Home} />
        <Route path="/Portfolio/shop" component={Shop} />
        <Route path="/Portfolio/cv" component={CV} />
        <Route path="/Portfolio/film" component={MovieFilm} />
        <Route path="/Portfolio/contact" component={Contact} />
        <Route path="/Portfolio/exemple" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;
