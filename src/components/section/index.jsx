import React, { useState, useEffect } from "react";
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <Grid container spacing={1}>
        {children}
      </Grid>
    </Wrapper>
  );
};

export default Section;
