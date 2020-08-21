import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Footer from "./components/Footer"
import "./css/App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/portfolio" component={ Portfolio } />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
