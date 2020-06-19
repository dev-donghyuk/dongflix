import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./layout/header";
import Movie from "./pages/movie";
import Tv from "./pages/tv";
import Search from "./pages/search";
import Detail from "./pages/detail";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Movie}></Route>
        <Route path="/movie" exact component={Movie}></Route>
        <Route path="/tv" exact component={Tv}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/movie/:id" component={Detail}></Route>
        <Route path="/tv/:id" component={Detail}></Route>

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
export default Routes;
