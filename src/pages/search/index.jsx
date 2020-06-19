import React, { useState } from "react";
import Wrapper from "./styles";
import useLogic from "./viewLogic";
const Search = () => {
  useLogic();
  return (
    <Wrapper>
      <h2>Search</h2>
    </Wrapper>
  );
};

export default Search;
