import React from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import Wrapper from './styles';

const LoadingBar: React.FC = () => {
   return (
      <Wrapper>
         <LinearProgress className="progress_bar" />
         <Grid className="click_block" />
      </Wrapper>
   );
};

export default LoadingBar;
