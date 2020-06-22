import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Wrapper from "./styles";

import useLogic from "./viewLogic";
import Poster from "../../pages/poster";
import Section from "../../components/section";
import Loader from "../../components/loader";
import Message from "../message";
import { movieApi } from "../../api";

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
                return (
                  <Grid item xs={3} sm={2} md={1}>
                    <Poster
                      key={x.id}
                      id={x.id}
                      title={x.original_title}
                      imageUrl={x.poster_path}
                      rating={x.vote_average}
                      year={x.release_date.substring(0, 4)}
                      isMovie={true}
                    />
                  </Grid>
                );
              })}
            </Section>
          )}
          {state.upComing && state.upComing.length > 0 && (
            <Section title="UpComing Movies">
              {state.upComing.map((x, index) => {
                return (
                  <Grid item xs={3} sm={2} md={1}>
                    <Poster
                      key={x.id}
                      id={x.id}
                      title={x.original_title}
                      imageUrl={x.poster_path}
                      rating={x.vote_average}
                      year={x.release_date.substring(0, 4)}
                      isMovie={true}
                    />
                  </Grid>
                );
              })}
            </Section>
          )}
          {state.popular && state.popular.length > 0 && (
            <Section title="Popular Movies">
              {state.popular.map((x, index) => {
                return (
                  <Grid item xs={3} sm={2} md={1}>
                    <Poster
                      key={x.id}
                      id={x.id}
                      title={x.original_title}
                      imageUrl={x.poster_path}
                      rating={x.vote_average}
                      year={x.release_date.substring(0, 4)}
                      isMovie={true}
                    />
                  </Grid>
                );
              })}
            </Section>
          )}
        </Grid>
      )}
      {state.error && <Message text={state.error} />}
    </Wrapper>
  );
};

export default Movie;
