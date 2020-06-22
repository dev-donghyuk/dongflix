import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "./../../api";
import Wrapper from "./styles";
import Loader from "./../../components/loader/";
import Section from "./../../components/section/";
import { Grid } from "@material-ui/core";
import Message from "../message";
import Poster from "../poster";
const Search = () => {
  const [state, setState] = useState({
    movieResult: null,
    tvResult: null,
    searchTerm: "code",
    error: null,
    loading: false,
  });

  const searchByTerm = async () => {
    setState({ ...state, loading: true });
    try {
      var movieResults = await movieApi.search(state.searchTerm);
      var tvResults = await tvApi.search(state.searchTerm);
      setState({
        ...state,
        movieResult: [...movieResults.data.results],
        tvResult: [...tvResults.data.results],
        loading: false,
      });
    } catch {
      setState({ ...state, error: "Can't find results." });
    }
  };

  const submitFunction = (event) => {
    event.preventDefault();
    if (state.searchTerm !== "") {
      searchByTerm();
    }
  };

  const updateFunction = (e) => {
    setState({ ...state, searchTerm: e.target.value });
  };
  return (
    <Wrapper>
      <form onSubmit={submitFunction} className="Search_Form">
        <input
          type="text"
          placeholder="Search Movies or TV Shows..."
          onChange={updateFunction}
        />
      </form>
      <Grid className="Box_Wrap">
        {state.loading ? (
          <Loader />
        ) : (
          <>
            {state.movieResult && state.movieResult.length > 0 && (
              <Section title="Movie Results">
                {state.movieResult.map((x, index) => {
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
            {state.tvResult && state.tvResult.length > 0 && (
              <Section title="TV Results">
                {state.tvResult.map((x, index) => {
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
          </>
        )}
        {state.error && <Message text={state.error} />}
        {state.movieResult &&
          state.tvResult &&
          state.movieResult.length === 0 &&
          state.tvResult.length === 0 && (
            <Message text={`Nothing found : ${state.searchTerm}`} />
          )}
      </Grid>
    </Wrapper>
  );
};

export default Search;
