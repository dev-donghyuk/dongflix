import React from 'react';
import { Grid } from '@material-ui/core';

import { Wrapper } from './styles';

type PosterWrapType = {
   children: React.ReactNode;
};

const PosterWrap: React.FC<PosterWrapType> = ({ children }) => {
   return (
      <Wrapper>
         <Grid className="poster_wrap">{children}</Grid>
      </Wrapper>
   );
};

export default PosterWrap;
