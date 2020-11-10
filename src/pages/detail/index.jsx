/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Wrapper, Backdrop } from "./styles";
import Helmet from "react-helmet";

import Loader from "./../../components/loader/";
import Message from "./../../pages/message/";
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
  const [youtubeSw, setYoutubeSw] = useState(false);
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
        rating: result && result.vote_average && result.vote_average,
      });
    };
    detailFunction();
  }, []);
  return (
    <>
      <Helmet>
        <title>Detail | Dongflix</title>
      </Helmet>
      {state.loading ? (
        <>
          <Loader />
          <Helmet>
            <title>Detail | Dongflix</title>
          </Helmet>
        </>
      ) : state.error ? (
        <Message text={state.error} />
      ) : (
        <Wrapper>
          <Backdrop
            bgUrl={
              state && state.result && state.result.backdrop_path
                ? `https://image.tmdb.org/t/p/original${state.result.backdrop_path}`
                : "/dongflix/images/notVideo.jpg"
            }
          />
          <Grid container className="Detail">
            <img
              src={
                state && state.result && state.result.poster_path
                  ? `https://image.tmdb.org/t/p/original${state.result.poster_path}`
                  : "/dongflix/images/notVideo.jpg"
              }
              alt="Poster"
              className="Poster"
            />
            <Grid className="Text">
              <Grid container alignItems="center">
                <Grid item>
                  <h2>
                    {state &&
                      state.result &&
                      state.result.original_title &&
                      state.result.original_title}
                    {state &&
                      state.result &&
                      state.result.original_name &&
                      state.result.original_name}
                  </h2>
                  <h3>
                    <span>
                      {state &&
                      state.result &&
                      state.result.genres &&
                      state.result.genres[0] &&
                      state.result.genres[0].name
                        ? state.result.genres[0].name
                        : "Not Found"}
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
                      {state &&
                        state.result &&
                        state.result.release_date &&
                        state.result.release_date.substring(0, 4) &&
                        state.result.release_date.substring(0, 4)}
                      {state &&
                        state.result &&
                        state.result.first_air_date &&
                        state.result.first_air_date.substring(0, 4) &&
                        state.result.first_air_date.substring(0, 4)}
                    </span>
                    <span>
                      {state &&
                        state.result &&
                        state.result.runtime &&
                        state.result.runtime}
                      {state &&
                        state.result &&
                        state.result.episode_run_time &&
                        state.result.episode_run_time}
                      &nbsp;min
                    </span>
                    <span className="Rating">
                      {state && state.result && state.result.vote_average && (
                        <span className="Star">
                          <span
                            className="Star_Cover"
                            style={{ width: `${state.rating * 10}%` }}
                          ></span>
                        </span>
                      )}
                    </span>
                  </h3>
                  <a
                    href={
                      state && state.result && state.result.homepage
                        ? `${state.result.homepage}`
                        : "/"
                    }
                    target="blank"
                    className="Review"
                  >
                    READ REVIEW
                  </a>
                  <p>
                    {state &&
                      state.result &&
                      state.result.overview &&
                      state.result.overview}
                  </p>
                  {state && state.result && state.result.videos && (
                    <Grid className={youtubeSw ? "Youtube On" : "Youtube"}>
                      <button
                        type="button"
                        onClick={() => {
                          setYoutubeSw(!youtubeSw);
                        }}
                      ></button>
                      <Grid className="Iframe_Wrap">
                        <iframe
                          title="youtube"
                          src={
                            state &&
                            state.result &&
                            state.result.videos &&
                            state.result.videos.results &&
                            state.result.videos.results[0] &&
                            state.result.videos.results[0].key &&
                            `https://www.youtube.com/embed/${state.result.videos.results[0].key}`
                          }
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Wrapper>
      )}
    </>
  );
};

export default Detail;
