import React, { useState, useEffect } from "react";
import Wrapper from "./styles";
import useLogic from "./viewLogic";
import Section from "../../components/section";
import Loader from "../../components/loader";
import { Grid } from "@material-ui/core";

const Movie = () => {
  const [state, setState] = useState({
    nowPlaying: [],
    upComing: [],
    popular: [],
    error: null,
    loading: true,
  });
  useLogic(state, setState);

  return (
    <Wrapper>
      {state.loading ? (
        <Loader />
      ) : (
        <Grid className="Box_Wrap">
          {state.nowPlaying && state.nowPlaying.length > 0 && (
            <Section title="Now Playing">
              {state.nowPlaying.map((x, index) => {
                return <span key={index}>{x.title}</span>;
              })}
            </Section>
          )}
          {state.upComing && state.upComing.length > 0 && (
            <Section title="UpComing Movies">
              {state.upComing.map((x, index) => {
                return <span key={index}>{x.title}</span>;
              })}
            </Section>
          )}
          {state.popular && state.popular.length > 0 && (
            <Section title="Popular Movies">
              {state.popular.map((x, index) => {
                return <span key={index}>{x.title}</span>;
              })}
            </Section>
          )}
        </Grid>
      )}
    </Wrapper>
  );
};

export default Movie;
