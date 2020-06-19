import React, { useState, useEffect } from "react";
import Wrapper from "./styles";
import { Grid, LinearProgress } from "@material-ui/core";

const Loader = () => {
  return (
    <Wrapper>
      <>
        <LinearProgress className="ProgressBar" />
        <Grid className="Click_Block"></Grid>
      </>
    </Wrapper>
  );
};

export default Loader;
