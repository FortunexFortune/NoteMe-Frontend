import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Form from "./components/Form"
import Tool from "./components/Tool"
import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Tool" render={() => <Tool component={Tool}/>}/>
            <Route path="/Form" render={() => <Form component={Form}/>}/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
