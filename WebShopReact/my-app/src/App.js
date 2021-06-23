import { Component, Suspense  } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";
import './App.css';
import Home from './Components/Home/index.js'
import About from './Components/About/index.js'
import CounterPage from './Components/counter/index'
import Navbar from './Components/navbar/index'
import LoginPage from './Components/login/index'

class App extends Component {

  render() {

    return (

      <>
        <Navbar />
        <div className="container">
          <Suspense fallback={<div>Загрузка...</div>}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/counter">
                <CounterPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </>


    )
  }
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


export default App;