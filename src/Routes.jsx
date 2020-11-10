import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";

// theme
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

// layout
import Layout from "./layout";
// pages
import Movie from "./pages/movie";
import Tv from "./pages/tv";
import Search from "./pages/search";
import Detail from "./pages/detail";

const Routes = () => {
  const reducer = useSelector((state) => state.reducer);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout />
        <Switch>
          <Route path="/" exact component={Movie}></Route>
          <Route path="/movie" exact component={Movie}></Route>
          <Route path="/tv" exact component={Tv}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/movie/:id" component={Detail}></Route>
          <Route path="/tv/:id" component={Detail}></Route>

          <Redirect from="*" to="/movie" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default Routes;
