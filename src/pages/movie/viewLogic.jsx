import React, { useState, useEffect } from "react";
import { movieApi } from "../../api";

const useLogic = (state, setState) => {
  const movieFunction = async () => {
    setState({
      ...state,
      loading: true,
    });
    try {
      const nowPlaying = await movieApi.nowPlaying();
      const upComing = await movieApi.upComing();
      const popular = await movieApi.popular();
      setState({
        ...state,
        nowPlaying: nowPlaying.data.results,
        upComing: upComing.data.results,
        popular: popular.data.results,
        loading: false,
      });
    } catch (e) {
      setState({ ...state, error: "Can't find Tvs information." });
    }
  };
  useEffect(() => {
    movieFunction();
  }, []);
};

export default useLogic;
