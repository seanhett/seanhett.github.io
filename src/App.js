import React, { Component } from 'react';
import location_icon from './icons/location.svg';
import react_icon from './icons/react.svg';
import dotnet_icon from './icons/dotnet.svg';
import email_icon from './icons/email.svg';
import github_icon from './icons/github.svg';
import home_icon from './icons/home.svg';
import menu_icon from './icons/menuButton.svg';
import phone_icon from './icons/phone.svg';
import whatsapp_icon from './icons/whatsapp.svg';
import javascript_icon from './icons/javascript.svg';
import './App.css';
import { Route, NavLink, HashRouter} from 'react-router-dom';
import Home from "./Home";
import Experience from "./Experience";
import About from "./About";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
       <div class="App-header">
            Sean Hettinger <br/>
            Environmental Scientist/Developer
          </div>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/experience">Experience</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/about" component={About}/>
          </div>
          <div class="App-footer">
          
          <a className="contact-icon" href="mailto:seanhett@gmail.com">
               <img src={email_icon} alt="email" /> 
          </a>
          <br/>
          <a className="contact-icon">
               <img src={phone_icon} alt="phone" /> 
          </a>
          <br/>
          <a className="contact-icon" href="https://www.google.com/maps/place/5929+Saintsbury+Dr+%2335,+The+Colony,+TX+75056/@33.0568555,-96.8512725,17z/data=!3m1!4b1!4m5!3m4!1s0x864c24ba55107b6d:0x38bd46ffcff40825!8m2!3d33.056851!4d-96.8490838">
               <img src={home_icon} alt="address" />
          </a>
          <br/>
          <a className="contact-icon" href="https://seanhett.github.com">
               <img src={github_icon} alt="github" />
          </a>
          <br/>
          </div>
  
        </div>
        </HashRouter>
    );
  }
}

export default App;
