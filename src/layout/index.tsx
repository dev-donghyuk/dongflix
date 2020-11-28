import React from 'react';
import { Grid } from '@material-ui/core';

import Header from './header';
import Wrapper from './styles';

type LayoutType = {
   children: React.ReactNode;
};

const Layout: React.FC<LayoutType> = ({ children }) => {
   return (
      <Wrapper>
         <Header />
         <Grid className="content">{children}</Grid>
      </Wrapper>
   );
};

export default Layout;
