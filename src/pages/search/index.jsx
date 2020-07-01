import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "./../../api";
import Wrapper from "./styles";
import Helmet from "react-helmet";

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
      <Helmet>
        <title>Search | Dongflix</title>
      </Helmet>
      <form onSubmit={submitFunction} className="Search_Form">
        <input
          type="text"
          placeholder="Search Movies or TV Shows..."
          onChange={updateFunction}
        />
      </form>
      <Grid className="Box_Wrap">
        {state.loading ? (
          <>
            <Loader />
            <Helmet>
              <title>Search | Dongflix</title>
            </Helmet>
          </>
        ) : (
          <>
            {state.movieResult && state.movieResult.length > 0 && (
              <Section title="Movie Results">
                {state.movieResult.map((x, index) => {
                  return (
                    <Grid item className="Poster_Wrap" key={x.id}>
                      <Poster
                        id={x.id}
                        title={x.original_title}
                        imageUrl={x.poster_path}
                        rating={x.vote_average}
                        year={
                          x &&
                          x.release_date &&
                          x.release_date.substring(0, 4) &&
                          x.release_date.substring(0, 4)
                        }
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
                    <Grid item className="Poster_Wrap" key={x.id}>
                      <Poster
                        id={x.id}
                        title={x.original_name}
                        imageUrl={x.poster_path}
                        rating={x.vote_average}
                        // year={x.first_air_date.substring(0, 4)}
                        year={
                          x &&
                          x.first_air_date &&
                          x.first_air_date.substring(0, 4)
                            ? x.first_air_date.substring(0, 4)
                            : "Not Found"
                        }
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
