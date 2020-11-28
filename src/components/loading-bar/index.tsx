import React from 'react';
import Wrapper from './styles';
import { Grid, LinearProgress } from '@material-ui/core';

const LoadingBar: React.FC = () => {
   return (
      <Wrapper>
         <LinearProgress className="progress_bar" />
         <Grid className="click_block" />
      </Wrapper>
   );
};

export default LoadingBar;
