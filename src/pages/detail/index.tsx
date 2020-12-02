/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@material-ui/core";
import { movieApi, tvApi } from "api";
import Message from "components/message";
import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useHistory, useParams } from "react-router-dom";

import { Backdrop, Wrapper } from "./styles";

type DataType = {
  result: any;
  error: string;
};

const Detail = () => {
  const history = useHistory();
  const { id } = useParams<any>();

  let parseIntId = parseInt(id);

  const [data, setData] = useState<DataType>({
    result: {},
    error: "",
  });

  let dataType = history.location.pathname.split("/")[1];

  const [youtubeSw, setYoutubeSw] = useState<boolean>(false);

  const DetailDataFunction = async () => {
    let result = {};
    try {
      if (dataType === "movie") {
        const data = await movieApi.movieDetail(parseIntId);
        result = data.data;
      } else {
        const data = await tvApi.tvDetail(parseIntId);
        result = data.data;
      }
    } catch (e) {
      setData({ ...data, error: "Can't find anything." });
    }
    setData({
      ...data,
      result,
    });
  };

  useEffect(() => {
    // id 없을 때 메인페이지로 유도
    if (isNaN(parseIntId)) {
      history.push("/");
    } else {
      DetailDataFunction();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Detail | Dongflix</title>
      </Helmet>
      {/*  */}
      {data.error !== "" ? (
        <Message text={data.error} />
      ) : (
        <Wrapper>
          <Backdrop
            bgUrl={
              data.result.backdrop_path
                ? `https://image.tmdb.org/t/p/original${data.result.backdrop_path}`
                : "/dongflix/images/notVideo.jpg"
            }
          />
          <Grid container className="detail">
            <img
              src={
                data.result.poster_path
                  ? `https://image.tmdb.org/t/p/original${data.result.poster_path}`
                  : "/dongflix/images/notVideo.jpg"
              }
              alt="poster"
              className="poster"
            />
            <Grid className="text">
              <Grid container alignItems="center">
                <Grid item>
                  <h2>
                    {data.result.original_title}
                    {data.result.original_name}
                  </h2>
                  <h3>
                    {data.result?.genres && data.result?.genres.length > 0 ? (
                      <>
                        <span className="genres">
                          {data.result.genres.map(
                            (x: any, index: number): any => {
                              return (
                                <em
                                  key={index}
                                  className={
                                    index + 1 === data.result.genres.length
                                      ? "last"
                                      : ""
                                  }
                                >
                                  {x.name}
                                  &nbsp;
                                  {index + 1 !== data.result.genres.length &&
                                    "/"}
                                </em>
                              );
                            }
                          )}
                        </span>
                      </>
                    ) : (
                      "Not Found"
                    )}

                    <span>
                      {data.result.release_date?.substring(0, 4)}
                      {data.result.first_air_date?.substring(0, 4)}
                    </span>
                    <span>
                      {data.result?.runtime}
                      {data.result?.episode_run_time}
                      &nbsp;min
                    </span>
                    <span className="rating">
                      {data.result?.vote_average && (
                        <span className="star">
                          <span
                            className="star_cover"
                            style={{
                              width: `${data.result?.vote_average * 10}%`,
                            }}
                          ></span>
                        </span>
                      )}
                    </span>
                  </h3>
                  <a
                    href={
                      data.result?.homepage ? `${data.result.homepage}` : "/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review"
                  >
                    READ REVIEW
                  </a>
                  <p>{data.result?.overview}</p>
                  {data.result?.videos && (
                    <Grid className={`youtube ${youtubeSw && "on"}`}>
                      <button
                        type="button"
                        onClick={() => {
                          setYoutubeSw(!youtubeSw);
                        }}
                      ></button>
                      <Grid className="iframe_wrap">
                        <iframe
                          title="youtube"
                          src={
                            data.result.videos.results[0]?.key &&
                            `https://www.youtube.com/embed/${data.result.videos.results[0].key}`
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
      {/*  */}
    </>
  );
};

export default Detail;
