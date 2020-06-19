import React, { useState } from "react";
import Wrapper from "./styles";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { movieApi, tvApi } from "../../api";

const Detail = (props) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    loading: true,
  });
  const isMovie = props.location.pathname.includes("/movie/");
  const isTv = props.location.pathname.includes("/tv/");
  const history = useHistory();
  const parsedId = parseInt(props.match.params.id);
  if (isNaN(parsedId)) {
    history.push("/");
  }
  useEffect(() => {
    const asyncFunction = async () => {
      let result = null;
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
      } finally {
        setState({ ...state, loading: false, result });
      }
    };
    asyncFunction();
  }, []);
  return (
    <Wrapper>
      <h2>Detail</h2>
    </Wrapper>
  );
};

export default Detail;
