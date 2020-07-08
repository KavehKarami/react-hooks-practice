import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

/* ----------------------------------- css ---------------------------------- */
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/home" component={Home} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
