import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <hr />
        <Switch>
          <Route exact path='/' component={Categories}/>
          <Route path='/Contemporain' render={(props) => <Content {...props} titre="Art Contemporain" />}/>
          <Route path='/Littéraire' render={(props) => <Content {...props} titre="Art Littéraire" />}/>
          <Route path='/Graphique' render={(props) => <Content {...props} titre="Art Graphique" />}/>
          <Route path='/Spéctacle-Vivant' render={(props) => <Content {...props} titre="Art Spéctacle Vivant" />}/>
          <Route path='/Cinématografique' render={(props) => <Content {...props} titre="Art Cinématografique" />}/>
          <Route path='/Partie-Juridique' render={(props) => <Content {...props} titre="Partie Juridique" />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
