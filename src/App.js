import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Form from "./components/Form"
import Tool from "./components/Tool"
import Footer from "./components/Footer"
import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {

  render() {
    return (
      <BrowserRouter>

        <body className="Site">
          <header>
            <Navbar />
          </header>

          <main className="Site-content">
          
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Tool" render={() => <Tool component={Tool} />} />
            <Route path="/Form" render={() => <Form component={Form} />} />
          </main>

          <footer>
            <Footer />
          </footer>
        </body>

      </BrowserRouter>

    );
  }
}

export default App;
