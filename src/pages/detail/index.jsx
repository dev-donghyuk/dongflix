import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import Loader from "./../../components/loader/";
import { Wrapper, Backdrop, Poster } from "./styles";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { movieApi, tvApi } from "../../api";

const Detail = (props) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    loading: true,
    rating: null,
  });
  const isMovie = props.location.pathname.includes("/movie/");
  const isTv = props.location.pathname.includes("/tv/");
  const history = useHistory();
  const parsedId = parseInt(props.match.params.id);
  if (isNaN(parsedId)) {
    history.push("/");
  }
  useEffect(() => {
    const detailFunction = async () => {
      let result = null;
      setState({ ...state, loading: true });
      try {
        if (isMovie) {
          const request = await movieApi.movieDetail(parsedId);
          result = request.data;
        } else if (isTv) {
          const request = await tvApi.tvDetail(parsedId);
          result = request.data;
        }
        console.log(result);
      } catch {
        setState({ ...state, error: "Can't find anything." });
      }
      setState({
        ...state,
        loading: false,
        result,
        rating: result.vote_average,
      });
    };
    detailFunction();
  }, []);
  return (
    <Wrapper>
      {state.loading ? (
        <Loader />
      ) : (
        <>
          <Backdrop
            bgUrl={
              state.result.backdrop_path
                ? `https://image.tmdb.org/t/p/original${state.result.backdrop_path}`
                : "/images/notVideo.png"
            }
          />

          <Grid container className="Detail">
            <Grid item md={4}>
              <Poster
                item
                bgUrl={
                  state.result.poster_path
                    ? `https://image.tmdb.org/t/p/original${state.result.poster_path}`
                    : "/images/notVideo.png"
                }
              />
            </Grid>
            <Grid item md={8} className="Text">
              <Grid container alignItems="center">
                <Grid item>
                  <h2>
                    {state.result.original_title
                      ? state.result.original_title
                      : state.result.original_name}
                  </h2>
                  <h3>
                    <span>
                      {state.result.genres && state.result.genres[0].name}
                    </span>
                    {/* <span>
                        {state.result.genres &&
                          state.result.genres.map((x, index) =>
                            index === x.length - 1 ? (
                              <span>{x.name}</span>
                            ) : (
                              <span>{x.name}/</span>
                            )
                          )}
                      </span> */}
                    <span>
                      {state.result.release_date
                        ? state.result.release_date.substring(0, 4)
                        : state.result.first_air_date.substring(0, 4)}
                    </span>
                    <span>
                      {state.result.runtime
                        ? state.result.runtime
                        : state.result.episode_run_time}
                      &nbsp;min
                    </span>
                    <span className="Rating">
                      {state.result.vote_average && (
                        <span className="Star">
                          <span
                            className="Star_Cover"
                            style={{ width: `${state.rating * 10}%` }}
                          ></span>
                        </span>
                      )}
                    </span>
                  </h3>
                  <p>{state.result.overview}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Wrapper>
  );
};

export default Detail;
