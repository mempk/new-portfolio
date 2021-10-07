import React from "react";
import "./App.css";
import ParticlesBg from "particles-bg";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/BodyComponent.css";
import Sidebar from "./component/Sidebar";
import AboutMe from "./component/AboutMe";
import Contact from "./component/Contact";
import Intro from "./component/Intro";
import Profile from "./component/Profile";
import Project from "./component/Project";
import Work from "./component/Work";
import MobileNav from "./component/MobileNav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MobileNav className="mobile_nav" />
        <div className="App_body">
          <Sidebar />
          <div className="body_component">
            <div className="body_component_main">
              <Switch>
                <Route exact path="/" component={AboutMe} />
                <Route path="/me" component={Intro} />
                <Route path="/work" component={Work} />
                <Route path="/project" component={Project} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
            <Profile />
          </div>
        </div>
      </div>
      <ParticlesBg color="#e91010" num={100} type="cobweb" bg={true} />
    </BrowserRouter>
  );
}

export default App;
