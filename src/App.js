import React from "react";
import {ShopProvider} from "./context/ShopContext";
import {TestProvider} from "./context/TestContext";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


// import Counter from "./components/First";
import Nav from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Planets from "./components/Planets";
import PlannetDetail from "./components/PlannetDetail";
import Shop from "./components/Shop"
import './App.css';

function App() {
  return (
    <TestProvider>
      <ShopProvider>
        <Router>
          <div className="App">
            <Nav/>
            <Switch>
              <Route exact path={'/'}>
                <Home/>
              </Route>
              <Route path={'/about'}>
                <About/>
              </Route>
              <Route exact path={'/planets'}>
                <Planets/>
              </Route>
              <Route exact path={'/shop'}>
                <Shop/>
              </Route>
              {/*<Route path={'/planets/:id'}>
            <PlannetDetail />
          </Route>*/}
              <Route
                path={'/planets/:id'}
                component={PlannetDetail}
              />
            </Switch>
          </div>
        </Router>
      </ShopProvider>
    </TestProvider>

  )
    ;
}

export default App;
