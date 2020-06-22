import React, { useState } from "react";
import Wrapper from "./styles";
import useLogic from "./viewLogic";
import Section from "../../components/section";
import { Grid } from "@material-ui/core";
import Loader from "../../components/loader";
import Message from "../message";
import Poster from "../poster";

const Tv = () => {
  const [state, setState] = useState({
    topRated: [],
    popular: [],
    airingToday: [],
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
          {state.topRated && state.topRated.length > 0 && (
            <Section title="Top Rated">
              {state.topRated.map((x, index) => {
                return (
                  <Grid item md={1}>
                    <Poster
                      key={x.id}
                      id={x.id}
                      title={x.original_title}
                      imageUrl={x.poster_path}
                      rating={x.vote_average}
                      year={x.release_date.substring(0, 4)}
                      isMovie={false}
                    />
                  </Grid>
                );
              })}
            </Section>
          )}
          {state.popular && state.popular.length > 0 && (
            <Section title="Popular TV">
              {state.popular.map((x, index) => {
                return (
                  <Grid item md={1}>
                    <Poster
                      key={x.id}
                      id={x.id}
                      title={x.original_title}
                      imageUrl={x.poster_path}
                      rating={x.vote_average}
                      year={x.release_date.substring(0, 4)}
                      isMovie={false}
                    />
                  </Grid>
                );
              })}
            </Section>
          )}
          {state.airingToday && state.airingToday.length > 0 && (
            <Section title="Airing Today TV">
              {state.airingToday.map((x, index) => {
                return (
                  <Grid item md={1}>
                    <Poster
                      key={x.id}
                      id={x.id}
                      title={x.original_title}
                      imageUrl={x.poster_path}
                      rating={x.vote_average}
                      year={x.release_date.substring(0, 4)}
                      isMovie={false}
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

export default Tv;
