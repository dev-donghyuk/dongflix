import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// layout
import Layout from './layout';

// pages
import Movie from 'pages/movie';
import Tv from 'pages/tv';
import Search from 'pages/search';
import Detail from 'pages/detail';

const Routes = () => {
   return (
      <BrowserRouter>
         <Layout>
            <Switch>
               <Route path="/" exact component={Movie} />
               <Route path="/movie" exact component={Movie} />
               <Route path="/tv" exact component={Tv} />
               <Route path="/search" component={Search} />
               <Route path="/movie/detail/:id" component={Detail} />
               <Route path="/tv/detail/:id" component={Detail} />

               <Redirect from="*" to="/movie" />
            </Switch>
         </Layout>
      </BrowserRouter>
   );
};
export default Routes;
