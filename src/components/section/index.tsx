import React from 'react';
import Wrapper from './styles';
import { Grid } from '@material-ui/core';

type SectionType = {
   title: string;
   children?: React.ReactNode;
};

const Section: React.FC<SectionType> = ({ title, children }) => {
   return (
      <Wrapper>
         <h2>{title}</h2>
         <Grid container>{children}</Grid>
      </Wrapper>
   );
};

export default Section;
