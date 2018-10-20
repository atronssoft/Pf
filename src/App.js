import React, { Component } from "react";
import Home from "./components/Home/Home";
import Education from "./components/Education/Education";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
