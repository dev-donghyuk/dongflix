import React from 'react';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { Wrapper, Icon } from './styles';

const data = [
   {
      key: '/movie',
      value: 'Movie',
      icon: '/dongflix/images/icon/movie_icon.png',
      cover: '/dongflix/images/icon/movie_icon_c.png',
   },
   { key: '/tv', value: 'TV', icon: '/dongflix/images/icon/tv_icon.png', cover: '/dongflix/images/icon/tv_icon_c.png' },
   {
      key: '/search',
      value: 'Search',
      icon: '/dongflix/images/icon/search_icon.png',
      cover: '/dongflix/images/icon/search_icon_c.png',
   },
];

const Header: React.FC = () => {
   return (
      <Wrapper>
         <Grid container justify="space-between" className="header_wrap">
            <Grid item>
               {data.map((x, index) => {
                  return (
                     index !== 2 && (
                        <NavLink key={index} to={x.key} activeClassName="on">
                           <Icon iconUrl={x.icon} coverUrl={x.cover} className="icon" />
                        </NavLink>
                     )
                  );
               })}
            </Grid>
            <Grid item>
               {data.map((x, index) => {
                  return (
                     index === 2 && (
                        <NavLink key={index} to={x.key} activeClassName="on">
                           <Icon iconUrl={x.icon} coverUrl={x.cover} className="icon" />
                        </NavLink>
                     )
                  );
               })}
            </Grid>
         </Grid>
      </Wrapper>
   );
};

export default Header;
