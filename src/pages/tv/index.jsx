import React, { useState } from "react";
import Wrapper from "./styles";
import useLogic from "./viewLogic";
import Section from "../../components/section";
import { Grid } from "@material-ui/core";
import Loader from "../../components/loader";

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
                return <span key={index}>{x.name}</span>;
              })}
            </Section>
          )}
          {state.popular && state.popular.length > 0 && (
            <Section title="Popular TV">
              {state.popular.map((x, index) => {
                return <span key={index}>{x.name}</span>;
              })}
            </Section>
          )}
          {state.airingToday && state.airingToday.length > 0 && (
            <Section title="Airing Today TV">
              {state.airingToday.map((x, index) => {
                return <span key={index}>{x.name}</span>;
              })}
            </Section>
          )}
        </Grid>
      )}
    </Wrapper>
  );
};

export default Tv;
